const Review = require("../models/reviewModel");
const User = require("../models/userModel");

exports.createReview = async (req, res) => {
    const { hospitalName, rating, comment } = req.body;
    const user = await User.findById(req.user.id);

    // Vérification de la fréquentation de l'hôpital
    const hasVisited = user.hospitalVisits.some(visit => visit.hospitalName === hospitalName);

    if (!hasVisited) {
        return res.status(403).json({ message: "Vous n'avez pas fréquenté cet hôpital" });
    }

    const review = await Review.create({ user: req.user.id, hospitalName, rating, comment, verified: true });
    res.status(201).json(review);
};
