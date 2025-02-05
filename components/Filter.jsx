import React from "react";
import Dropdown from "./Dropdown";
import DateRangePicker from "./DateSelector";
import { FilterIcon } from "lucide-react";
import { Button } from "./ui/button";

const Filter = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[47px] py-2">
        <Dropdown />
        <div className="flex items-center">
          <DateRangePicker />
          <div className="flex items-center justify-center px-6">
            <FilterIcon />
            <span>Filter</span>
          </div>
          <Button className="bg-gray-900 text-white py-2 rounded-[10px] px-4">
            New AI Metric
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
