import React from 'react';

function Planning() {
  const data = [
    { id: 1, task: 'Deploy system to server', status: 'Pending', dueDate: '2025-08-01' },
    { id: 2, task: 'Create mission report', status: 'In Progress', dueDate: '2025-08-05' },
    { id: 3, task: 'Data backup', status: 'Completed', dueDate: '2025-07-20' },
  ];

  return (
    <div className="px-8 text-white bg-[#1C1C1C] min-h-screen">
      <h2 className="text-2xl font-bold text-[#0A7CAD] mb-6">Planning Overview</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#2A2A2A] rounded-lg shadow-md">
          <thead>
            <tr className="text-left border-b border-gray-600">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Task</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-[#383838] transition">
                <td className="py-3 px-4">{row.id}</td>
                <td className="py-3 px-4">{row.task}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-sm font-semibold ${
                      row.status === 'Completed'
                        ? 'bg-green-600 text-white'
                        : row.status === 'In Progress'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-4">{row.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Planning;
