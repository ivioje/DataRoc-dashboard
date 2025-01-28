import React from "react";

const Dropdown = () => {
  return (
    <>
      <div>
        <select className="text-gray-700 outline-none font-medium top-dropdown">
          <option selected value="Business Performance Metrics">
            Business Performance Metrics
            <svg
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </option>
          <option value="Website Performance Metrics">
            Website Performance Metrics
          </option>
          <option value="User Behavior Metrics">User Behavior Metrics</option>
          <option value="Future Performance Metrics">
            Future Performance Metrics
          </option>
        </select>
      </div>
    </>
  );
};

export default Dropdown;
