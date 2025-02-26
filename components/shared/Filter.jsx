import React from "react";
import Dropdown from "../Dropdown";
import DateRangePicker from "./DateSelector";
import { FilterIcon } from "lucide-react";
import ButtonComponent from "./Button";

const Filter = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-2 w-full">
        <div className="">
          <Dropdown />
        </div>
        <div className="flex items-center w-[60%]">
          <DateRangePicker />
          <div className="flex items-center justify-center px-6">
            <FilterIcon size={21} className="mr-1" />
            <span>Filter</span>
          </div>
          <ButtonComponent text="New AI Metric" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
