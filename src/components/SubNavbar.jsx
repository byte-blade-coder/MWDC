import React, { useState } from 'react';

function SubNavbar() {
  const [activeTab, setActiveTab] = useState('TASKS');

  const tabs = ['DEFINITIONS', 'TASKS', 'PLANNING'];

  return (
    <div className="bg-[#1C1C1C] px-8 text-white">
      <div className="flex items-center gap-8">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-4 uppercase text-base font-semibold tracking-widest
                transition-all duration-200
                ${isActive
                  ? 'text-white border-b-2 border-blue-500' 
                  : 'text-white border-b-2 border-transparent hover:text-white'
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SubNavbar;