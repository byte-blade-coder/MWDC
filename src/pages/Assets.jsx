import React from 'react';

const dummyAssets = [
  {
    id: 1,
    name: 'Asset Alpha',
    type: 'Vehicle',
    status: 'Active',
    location: 'Sector A',
  },
  {
    id: 2,
    name: 'Asset Beta',
    type: 'Drone',
    status: 'Inactive',
    location: 'Sector B',
  },
  {
    id: 3,
    name: 'Asset Gamma',
    type: 'Satellite',
    status: 'Active',
    location: 'Sector C',
  },
];

function Assets() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] p-6 text-white">
      <h1 className="text-3xl font-bold text-[#0A7CAD] mb-6">Assets Page</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {dummyAssets.map((asset) => (
          <div
            key={asset.id}
            className="bg-[#2A2A2A] rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-[#0A7CAD]">{asset.name}</h2>
            <p className="text-sm text-gray-400">Type: {asset.type}</p>
            <p className="text-sm text-gray-400">Location: {asset.location}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full 
                ${
                  asset.status === 'Active'
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white'
                }`}
            >
              {asset.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assets;
