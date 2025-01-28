import React from "react";
import Dropdown from "./Dropdown";
import DateRangePicker from "./DateSelector";
import { FilterIcon } from "lucide-react";
import { Button } from "./ui/button";

const Filter = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-14">
        <Dropdown />
        <div className="flex">
          <DateRangePicker />
          <div className="flex items-center justify-center px-6">
            <FilterIcon />
            <span>Filter</span>
          </div>
          <Button className="bg-gray-900 text-white py-2 rounded px-4">
            New AI Metric
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
