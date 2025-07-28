import React from 'react';

const environments = [
  {
    id: 1,
    name: 'Desert Zone',
    temperature: '45°C',
    condition: 'Dry',
    status: 'Hostile',
  },
  {
    id: 2,
    name: 'Forest Area',
    temperature: '28°C',
    condition: 'Humid',
    status: 'Safe',
  },
  {
    id: 3,
    name: 'Arctic Region',
    temperature: '-10°C',
    condition: 'Snowy',
    status: 'Extreme',
  },
];

function Environment() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] p-6 text-white">
      <h1 className="text-3xl font-bold text-[#0A7CAD] mb-6">Environment Page</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {environments.map((env) => (
          <div
            key={env.id}
            className="bg-[#2A2A2A] rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-[#0A7CAD]">{env.name}</h2>
            <p className="text-sm text-gray-400">Temperature: {env.temperature}</p>
            <p className="text-sm text-gray-400">Condition: {env.condition}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                env.status === 'Safe'
                  ? 'bg-green-600'
                  : env.status === 'Hostile'
                  ? 'bg-yellow-600'
                  : 'bg-red-600'
              }`}
            >
              {env.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Environment;
