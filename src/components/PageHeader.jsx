import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function PageHeader() {
  return (
    <div className="bg-[#1C1C1C] px-8 py-6">
      
      {/* Back Button */}
      <button 
        className="flex items-center gap-2 px-4 py-1 bg-[#0A7CAD] text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      <div className="flex items-center gap-4 mt-6">
        <h1 className="text-white text-lg font-semibold whitespace-nowrap">
          Task Creation
        </h1>
        <div className="w-full h-[2px] bg-blue-400"></div>
      </div>

    </div>
  );
}

export default PageHeader;