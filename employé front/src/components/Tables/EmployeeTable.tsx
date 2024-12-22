import React from 'react';

interface Employee {
  name: string;
  department: string;
  email: string;
}

const EmployeeTable: React.FC = () => {
  const employees: Employee[] = [
    { name: 'Employé 1', department: 'Département 1', email: 'nom@entreprise.com' },
    { name: 'Employé 2', department: 'Département 2', email: 'nom@entreprise.com' },
    { name: 'Employé 3', department: 'Département 3', email: 'nom@entreprise.com' },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Page d’accès</h1>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option value="all">Tous les départements</option>
              <option value="dep1">Département 1</option>
              <option value="dep2">Département 2</option>
              <option value="dep3">Département 3</option>
            </select>
            <input
              type="text"
              placeholder="Rechercher..."
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left px-4 py-2">Nom</th>
              <th className="text-left px-4 py-2">Département</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.department}</td>
                <td className="px-4 py-2">{employee.email}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600"
                    onClick={() => console.log(`Deleted ${employee.name}`)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
