import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage"; // Si tu as une page d'accueil

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Page d'accueil */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Tableau de bord */}
      </Routes>
    </Router>
  );
};

export default App;
