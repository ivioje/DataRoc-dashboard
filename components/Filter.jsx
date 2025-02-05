import React from "react";
import Dropdown from "./Dropdown";
import DateRangePicker from "./DateSelector";
import { FilterIcon } from "lucide-react";
import ButtonComponent from "./Button";

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
          <ButtonComponent text="New AI Metric" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
