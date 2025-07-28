import React from 'react';

const dataRecords = [
  {
    id: 1,
    name: 'Satellite A',
    type: 'Orbital',
    lastContact: '2025-07-20',
    status: 'Operational',
  },
  {
    id: 2,
    name: 'Drone B',
    type: 'Aerial',
    lastContact: '2025-07-22',
    status: 'Idle',
  },
  {
    id: 3,
    name: 'Sensor C',
    type: 'Ground',
    lastContact: '2025-07-21',
    status: 'Offline',
  },
];

function DataExplorer() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] p-6 text-white">
      <h1 className="text-3xl font-bold text-[#0A7CAD] mb-6">Data Explorer Page</h1>

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full text-sm text-left text-gray-400">
          <thead className="bg-[#2A2A2A] text-xs uppercase text-gray-300">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Last Contact</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataRecords.map((record) => (
              <tr key={record.id} className="bg-[#1F1F1F] border-b border-gray-700 hover:bg-[#292929]">
                <td className="px-6 py-4">{record.name}</td>
                <td className="px-6 py-4">{record.type}</td>
                <td className="px-6 py-4">{record.lastContact}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      record.status === 'Operational'
                        ? 'bg-green-600 text-white'
                        : record.status === 'Idle'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataExplorer;
