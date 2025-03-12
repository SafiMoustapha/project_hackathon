const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Inscription
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'inscription", error });
    }
};

// Connexion
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Email ou mot de passe incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
};

// Upload de documents
exports.uploadProof = async (req, res) => {
    const { hospitalName, visitDate } = req.body;
    const proofDocument = req.file ? req.file.filename : null;

    if (!proofDocument) {
        return res.status(400).json({ message: "Aucun fichier fourni" });
    }

    const user = await User.findById(req.user.id);
    user.hospitalVisits.push({ hospitalName, visitDate, proofDocument });
    await user.save();

    res.json({ message: "Document ajouté avec succès" });
};
