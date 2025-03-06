import React from "react";
import Dropdown from "../Dropdown";
import DateRangePicker from "./DateSelector";
import { FilterIcon, PlusIcon } from "lucide-react";
import ButtonComponent from "./Button";

const Filter = () => {
  return (
    <div>
      <div className="flex items-center justify-between xl:px-10 lg:px-8 sm:px-6 pr-2 sm:py-2 py-5 w-full">
        <div className="">
          <Dropdown />
        </div>
        <div className="flex items-center md:w-[60%]">
          <div className="md:block hidden"><DateRangePicker /></div>
          <div className="flex items-center justify-center sm:px-6 px-3">
            <FilterIcon size={21} className="mr-1" />
            <span className="lg:block hidden">Filter</span>
          </div>
          <div className="sm:block hidden"><ButtonComponent text="New AI Metric" /></div>
          <div className="sm:hidden block rounded-full"><ButtonComponent text={<PlusIcon size={30} className="font-bold" />} /></div>
        </div>
      </div>
      <div className="md:hidden block"><DateRangePicker /></div>
    </div>
  );
};

export default Filter;
