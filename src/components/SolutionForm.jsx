import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CustomDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white text-black px-3 py-2 rounded-md text-left flex justify-between items-center"
      >
        <span>{selectedValue}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-3 py-2 text-black hover:bg-[#0A7CAD] hover:text-white cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SolutionForm = () => {
  const areaOptions = ["Area 1", "Area 2"];
  const riskOptions = ["Alpha", "Bravo", "Charlie"];

  return (
    <div className="p-8 bg-[#1C1C1C]">
      <div className="p-1 border-2" style={{ borderColor: "#515555" }}>
        <div className="p-6 bg-[#1C1C1C]">
          <h2 className="text-xl font-bold text-white mb-6">
            Solution
          </h2>

          <div className="flex justify-center">
            <form
              className="w-full max-w-lg space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="opCode"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Operation Code
                </label>
                <input
                  type="text"
                  id="opCode"
                  placeholder="Enter operation code"
                  className="w-full bg-white text-black px-3 py-2 rounded-md border-none focus:ring-2"
                  style={{ outline: "none", boxShadow: "0 0 0 2px #0A7CAD" }}
                />
              </div>

              <CustomDropdown label="Area" options={areaOptions} />

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Time to Start
                </label>
                <input
                  type="text"
                  id="time"
                  placeholder="Enter time to start"
                  className="w-full bg-white text-black px-3 py-2 rounded-md border-none focus:ring-2"
                  style={{ outline: "none", boxShadow: "0 0 0 2px #0A7CAD" }}
                />
              </div>

              <div>
                <label
                  htmlFor="coverage"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Coverage Rate
                </label>
                <input
                  type="text"
                  id="coverage"
                  placeholder="Enter coverage rate"
                  className="w-full bg-white text-black px-3 py-2 rounded-md border-none focus:ring-2"
                  style={{ outline: "none", boxShadow: "0 0 0 2px #0A7CAD" }}
                />
              </div>

              <div>
                <label
                  htmlFor="clearance"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Clearance Rate
                </label>
                <input
                  type="text"
                  id="clearance"
                  placeholder="Enter clearance rate"
                  className="w-full bg-white text-black px-3 py-2 rounded-md border-none focus:ring-2"
                  style={{ outline: "none", boxShadow: "0 0 0 2px #0A7CAD" }}
                />
              </div>

              <CustomDropdown label="Risk Directive" options={riskOptions} />

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-12 py-2 rounded-md text-white transition-colors duration-200"
                  style={{ backgroundColor: "#0A7CAD" }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#086c8b")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#0A7CAD")
                  }
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionForm;
