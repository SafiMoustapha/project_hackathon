const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    hospitalName: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true },
    verified: { type: Boolean, default: false }, // Vérification si le patient a fréquenté l'hôpital
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
