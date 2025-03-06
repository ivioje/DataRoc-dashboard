import React from "react";
import Dropdown from "../Dropdown";
import DateRangePicker from "./DateSelector";
import { FilterIcon } from "lucide-react";
import ButtonComponent from "./Button";

const Filter = () => {
  return (
    <div>
      <div className="flex items-center justify-between xl:px-10 lg:px-8 px-4 py-2 w-full">
        <div className="">
          <Dropdown />
        </div>
        <div className="flex items-center md:w-[60%]">
          <div className="md:block hidden"><DateRangePicker /></div>
          <div className="flex items-center justify-center px-6">
            <FilterIcon size={21} className="mr-1" />
            <span className="lg:block hidden">Filter</span>
          </div>
          <ButtonComponent text="New AI Metric" />
        </div>
      </div>
      <div className="md:hidden block"><DateRangePicker /></div>
    </div>
  );
};

export default Filter;
