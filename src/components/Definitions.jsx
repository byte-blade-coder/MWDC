import React from 'react';

function Definitions() {
  const definitions = [
    { term: 'Mission', description: 'A specific task or duty assigned to a team or system.' },
    { term: 'Asset', description: 'Any resource—physical or digital—used to accomplish a mission.' },
    { term: 'Planning', description: 'The process of defining tasks, timelines, and goals.' },
  ];

  return (
    <div className="px-8 bg-[#1C1C1C] min-h-screen text-white">
      <h2 className="text-2xl font-bold text-[#0A7CAD] mb-6">Key Definitions</h2>

      <div className="space-y-4">
        {definitions.map((def, index) => (
          <div
            key={index}
            className="bg-[#2A2A2A] p-4 rounded-lg shadow-md hover:bg-[#383838] transition"
          >
            <h3 className="text-lg font-semibold text-[#4FC3F7]">{def.term}</h3>
            <p className="text-sm text-gray-300">{def.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Definitions;
