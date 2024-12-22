import React from "react";

const EmployeeDashboard: React.FC = () => {
  return (
    <div className="bg-blue-100 min-h-screen p-8">
      {/* Dashboard Container */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-4 h-4 bg-black rounded"></div>
          <h1 className="text-xl font-bold">Tableau de bord</h1>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Résumé */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Résumé</h2>
            <div className="space-y-4">
              <div className="bg-green-500 text-white p-4 rounded shadow">
                Jours ouverts
              </div>
              <div className="bg-purple-800 text-white p-4 rounded shadow">
                Absences
              </div>
              <div className="bg-purple-500 text-white p-4 rounded shadow">
                Retards
              </div>
            </div>
          </div>

          {/* Historique */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Historique</h2>
            <div className="space-y-4">
              <div className="bg-green-500 text-white p-4 rounded shadow">
                Date
              </div>
              <div className="bg-purple-800 text-white p-4 rounded shadow">
                Absences/Retards
              </div>
              <div className="bg-purple-500 text-white p-4 rounded shadow">
                Justification
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;