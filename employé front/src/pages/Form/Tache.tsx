import React from "react";

const TaskManager: React.FC = () => {
  const tasks = [
    { id: 1, employee: "John Doe", taskName: "Tâche 1", status: "traité", color: "bg-green-500" },
    { id: 2, employee: "Jane Smith", taskName: "Tâche 2", status: "en cours", color: "bg-purple-500" },
    { id: 3, employee: "Alice Johnson", taskName: "Tâche 3", status: "completer", color: "bg-blue-500" },
    { id: 4, employee: "Bob Brown", taskName: "Tâche 4", status: "traité", color: "bg-green-500" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Liste des tâches</h1>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left text-sm text-gray-600">Nom d'employé</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-sm text-gray-600">Nom de la tâche</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-sm text-gray-600">Statut</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">{task.employee}</td>
                <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">{task.taskName}</td>
                <td className="border border-gray-200 px-4 py-2 text-sm">
                  <span className={`px-4 py-1 rounded-full text-white text-xs ${task.color}`}>
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManager;
