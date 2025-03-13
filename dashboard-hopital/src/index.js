import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ton composant App principal
import "./index.css"; // Optionnel : ton fichier CSS global

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Ton composant principal */}
  </React.StrictMode>
);
