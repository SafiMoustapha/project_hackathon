import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 h-screen text-white p-5">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <ul className="mt-5">
        <li className="py-2 hover:bg-blue-700 cursor-pointer">Accueil</li>
        <li className="py-2 hover:bg-blue-700 cursor-pointer">Statistiques</li>
        <li className="py-2 hover:bg-blue-700 cursor-pointer">Avis des Patients</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-gray-100 p-4 flex justify-between shadow-md">
      <h1 className="text-xl font-semibold">Tableau de Bord</h1>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-full">Profil</div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-semibold">Bienvenue sur le Tableau de Bord</h2>
          <p className="text-gray-600 mt-2">Visualisez les statistiques et avis des patients ici.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
