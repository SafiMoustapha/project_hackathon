const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "admin"], default: "patient" },
    hospitalVisits: [
        {
            hospitalName: String,
            visitDate: Date,
            proofDocument: String, // Fichier de preuve (ex : facture, ordonnance)
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
