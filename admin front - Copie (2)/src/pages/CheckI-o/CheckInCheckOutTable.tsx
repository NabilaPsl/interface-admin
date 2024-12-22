import React, { useState } from "react";

interface EmployeeRecord {
  id: number;
  name: string;
  role: string;
  checkInTime: string | null;
  checkOutTime: string | null;
}

const CheckInCheckOutTable: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeRecord[]>([
    { id: 1, name: "John Doe", role: "Software Engineer", checkInTime: null, checkOutTime: null },
    { id: 2, name: "Jane Smith", role: "Product Manager", checkInTime: null, checkOutTime: null },
    { id: 3, name: "Michael Brown", role: "UI/UX Designer", checkInTime: null, checkOutTime: null },
  ]);

  const handleCheckIn = (id: number) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === id
          ? { ...employee, checkInTime: new Date().toLocaleTimeString() }
          : employee
      )
    );
  };

  const handleCheckOut = (id: number) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === id
          ? { ...employee, checkOutTime: new Date().toLocaleTimeString() }
          : employee
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Employee Check-In/Check-Out</h1>
      <div className="overflow-x-auto rounded-lg bg-white shadow-md">
        <table className="min-w-full text-left text-gray-800">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="px-6 py-3 text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-sm font-medium">Role</th>
              <th className="px-6 py-3 text-sm font-medium">Check-In Time</th>
              <th className="px-6 py-3 text-sm font-medium">Check-Out Time</th>
              <th className="px-6 py-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="px-6 py-4 text-sm">{employee.id}</td>
                <td className="px-6 py-4 text-sm">{employee.name}</td>
                <td className="px-6 py-4 text-sm">{employee.role}</td>
                <td className="px-6 py-4 text-sm">
                  {employee.checkInTime || "Not Checked In"}
                </td>
                <td className="px-6 py-4 text-sm">
                  {employee.checkOutTime || "Not Checked Out"}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCheckIn(employee.id)}
                      disabled={!!employee.checkInTime}
                      className={`rounded bg-blue-500 px-4 py-2 text-white text-sm hover:bg-blue-600 disabled:bg-gray-300`}
                    >
                      Check-In
                    </button>
                    <button
                      onClick={() => handleCheckOut(employee.id)}
                      disabled={!!employee.checkOutTime || !employee.checkInTime}
                      className={`rounded bg-green-500 px-4 py-2 text-white text-sm hover:bg-green-600 disabled:bg-gray-300`}
                    >
                      Check-Out
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckInCheckOutTable;
