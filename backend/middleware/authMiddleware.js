const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Accès non autorisé, token manquant" });
    }

    try {
        token = token.split(" ")[1]; // Supprime "Bearer "
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password"); // Ajoute l'utilisateur à la requête
        next();
    } catch (error) {
        res.status(401).json({ message: "Token invalide" });
    }
};

module.exports = protect;
