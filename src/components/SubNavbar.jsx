import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SubNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = ['DEFINITIONS', 'TASKS', 'PLANNING'];

  const activeTab = tabs.find(tab =>
    location.pathname.toLowerCase().includes(tab.toLowerCase())
  ) || 'TASKS';

  return (
    <div className="bg-[#1C1C1C] px-8 text-white">
      <div className="flex items-center gap-8">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => navigate(`/mission/${tab.toLowerCase()}`)} // ✅ Absolute path
              className={`
                py-4 uppercase text-base font-semibold tracking-widest
                transition-all duration-200
                ${isActive
                  ? 'text-white border-b-2 border-blue-500'
                  : 'text-white border-b-2 border-transparent hover:text-white'}
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
