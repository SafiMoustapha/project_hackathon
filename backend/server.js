const express = require("express");
const app = express();
const port = 3000;

// Liste des hôpitaux d'Abidjan
const hospitals = [
    { id: "chu_cocody", name: "Centre hospitalier universitaire de Cocody (CHU de Cocody)" },
    { id: "chu_treichville", name: "Centre hospitalier universitaire de Treichville (CHU de Treichville)" },
    { id: "chu_yopougon", name: "Centre hospitalier universitaire de Yopougon (CHU de Yopougon)" },
    { id: "chu_angre", name: "Centre hospitalier universitaire d'Angré (CHU d'Angré)" },
    { id: "hma", name: "Hôpital militaire d'Abidjan (HMA)" },
    { id: "cnts", name: "Centre national de transfusion sanguine (Abidjan)" },
    { id: "centre_sante_communautaire", name: "Centre de santé communautaire" },
    { id: "centre_sante_el_rapha", name: "Centre de santé El Rapha3" },
    { id: "centre_sante_abobo", name: "Centre de santé urbain à base communautaire d'Abobo" },
    { id: "centre_education_sanitaire", name: "Centre Éducation Sanitaire" },
    { id: "centre_medical_cegos", name: "Centre médical le CEGOS" },
    { id: "hopital_general_abobo", name: "Hôpital général d'Abobo" },
    { id: "hopital_general_port_bouet", name: "Hôpital général de Port-Bouët" },
    { id: "hopital_general_anyama", name: "Hôpital général d'Anyama" },
    { id: "hopital_general_koumassi", name: "Hôpital général de Koumassi" },
    { id: "hopital_general_marcory", name: "Hôpital général de Marcory" },
    { id: "pisam", name: "Polyclinique internationale Sainte Anne-Marie (PISAM)" },
    { id: "polyclinique_deux_plateaux", name: "Polyclinique des Deux-Plateaux" },
    { id: "polyclinique_farah", name: "Polyclinique Médicale FARAH, Marcory" },
    { id: "cima", name: "Centre d'imagerie médicale d'Abidjan (CIMA)" },
    { id: "polyclinique_avicenne", name: "Polyclinique Avicenne - Boulevard Achalme, Marcory Résidentiel" },
    { id: "pihda", name: "Polyclinique internationale Hôtel Dieu Abidjan (PIHDA)" },
    { id: "polyclinique_les_graces", name: "Polyclinique Les Grâces, Marcory Zone 4" },
    { id: "polyclinique_abobo", name: "Polyclinique centrale Abobo" },
    { id: "polyclinique_indenie", name: "Polyclinique internationale de l'Indénié" },
    { id: "polyclinique_sainte_anne", name: "Polyclinique Sainte-Anne Marie Anani" },
    { id: "polyclinique_graces_marcory", name: "Polyclinique 'Les Grâces - Marcory'" },
    { id: "polyclinique_la_providence", name: "Polyclinique La Providence - Cocody" },
    { id: "polyclinique_pantheon", name: "Polyclinique Panthéon médical-Riviera 3" },
    { id: "cmal", name: "Clinique médical Adjamé Liberté (CMAL)" },
    { id: "clinique_procrea", name: "Clinique Procréa- Cocody Riviera Palmeraie" },
    { id: "centre_medical_dermatologie", name: "Centre médical de Dermatologie d'Abidjan Cocody" },
    { id: "centre_ophtalmologie", name: "Centre international d'ophtalmologie" },
    { id: "centre_medical_rochelle", name: "Centre médical La Rochelle" },
    { id: "clinique_trade_center", name: "Clinique Trade Center" },
    { id: "clinique_goci", name: "Clinique Goci" },
    { id: "centre_sante_sagesse", name: "Centre médical 'La Sagesse', quartier Abobo" },
    { id: "clinique_israel", name: "Clinique Israel" },
    { id: "clinique_arcades", name: "Clinique Les Arcades" },
    { id: "clinique_beatitudes", name: "Clinique médicale Les Béatitudes" },
    { id: "clinique_rosette", name: "Clinique médicale La Rosette" },
    { id: "clinique_messie", name: "Clinique médicale le Messie" },
    { id: "clinique_dokui", name: "Clinique médicale du Dokui" },
    { id: "espace_medical_saintpaul", name: "Espace médical Saint-Paul" },
    { id: "clinique_universelle", name: "Clinique universelle Santé Cusa" },
    { id: "clinique_saintmartin", name: "Clinique Saint-Martin de Tours (CSM)" },
    { id: "centre_medical_archanges", name: "centre médical Les Archanges" },
    { id: "clinique_saintgabriel", name: "Clinique Saint-Gabriel" },
    { id: "clinique_rhema", name: "Clinique Rhema" },
    { id: "clinique_nanan", name: "Clinique Nanan" },
    { id: "clinique_colombe", name: "Clinique médicale La Colombe" },
    { id: "clinique_rosamaria", name: "Clinique Rosa Maria" },
    { id: "clinique_annemarie", name: "Clinique médicale Anne Marie" },
    { id: "espace_medical_pulcherie", name: "Espace médical La Pulcherie" },
    { id: "centre_medical_cherubins", name: "Centre médical Les Cherubins, Abobo" },
    { id: "centre_medical_eden", name: "Centre Médical EDEN Abobo Belleville" },
    { id: "clinique_saintviateur", name: "Clinique médicale Saint-Viateur, Riviera palmeraie" },
    { id: "groupe_medical_plateau", name: "Groupe médical Plateau" },
    { id: "groupe_medical_promethee", name: "Groupe médical Promethée" },
    { id: "centre_medical_inter", name: "Centre médical Inter Entreprise (plateau)" },
    { id: "espace_medical_phenix", name: "Espace médical Le Phenix" },
    { id: "centre_medical_harmony", name: "Centre médical Harmony (CMH), Riviera Golf" },
    { id: "centre_medical_elkabod", name: "Centre médical Social El-Kabod , Koumassi Remblais" },
    { id: "centre_medical_missions", name: "Centre médical des œuvres et mission (CMOMISS), Yopougon Camp Militaire" },
    { id: "clinique_danga", name: "Clinique médicale Danga, du quartier Cocody Danga" },
    { id: "centre_medical_gospa", name: "Centre Médical International La Gospa, Cocody Danga" },
    { id: "clinique_oasis", name: "Clinique Medicale OASIS SANTE,Yopougon Keneya" },
    { id: "espace_medical_saintgeorges", name: "Espace Médical Saint Georges (Méagui)" },
    { id: "clinique_bethanie", name: "Clinique Bethanie (Korhogo)" },
    { id: "clinique_rimca", name: "Clinique RIMCA (Koumassi)" }
];

// Endpoint pour obtenir la liste des hôpitaux
app.get("/api/hospitals", (req, res) => {
    res.json(hospitals);
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur API en écoute sur http://localhost:${port}`);
});
