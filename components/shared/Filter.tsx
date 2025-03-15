"use client";
import React from "react";
import { useModalStore } from "@/store/modal-store";
import { useTabStore } from "@/store/tab-store";

import Dropdown from "../Dropdown";
import DateRangePicker from "./DateSelector";
import ButtonComponent from "./Button";
import { FilterIcon, PlusIcon } from "lucide-react";

const Filter = () => {
  const { open } = useModalStore();
  const tab = useTabStore((state: any) => state.tab)

  return (
    <div>
      <div className="flex items-center justify-between xl:px-10 lg:px-8 sm:px-6 pr-2 sm:py-2 py-5 w-full">
        <div className="">
          <Dropdown />
        </div>
        <div className="flex items-center md:w-3/5">
          <div className="md:block hidden"><DateRangePicker /></div>
          <div className="flex items-center justify-center sm:px-6 px-3">
            <FilterIcon size={21} className="mr-1" />
            <span className="lg:block hidden">Filter</span>
          </div>
          <div className="sm:block hidden" onClick={() => {
            tab.handleChangeTab('website');
            open();
            }}>
            <ButtonComponent text="New AI Metric" />
          </div>
          <div className="sm:hidden block rounded-full" onClick={() => {
            tab.handleChangeTab('website');
            open();
            }}>
            <ButtonComponent text={<PlusIcon size={30} className="font-bold" />} />
          </div>
        </div>
      </div>
      <div className="md:hidden block"><DateRangePicker /></div>
    </div>
  );
};

export default Filter;
