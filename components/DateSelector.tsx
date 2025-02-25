"use client";
import { MiddlewareReturn } from "@floating-ui/core";
import { MiddlewareState } from "@floating-ui/dom";
import { CalendarDaysIcon } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex items-center space-x-4 w-full">
      {/* From Date */}
        <div className="flex items-center rounded-md px-3 py-2 relative w-1/2">
          <span className="text-gray-700 mr-2">From</span>
          <span className="relative">
            <CalendarDaysIcon
              size={20}
              className="absolute left-0 -top-[10px] z-10 mx-3"
            />
          </span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="outline-none z-[1] border w-full border-gray-300 p-2 shadow-sm rounded-[10px] pl-10"
            dateFormat="d MMM"
           portalId="root"
          />
          {startDate && (
            <button
              onClick={() => setStartDate(null)}
              className="text-black font-bold ml-2 absolute right-6 z-10"
            >
              ✕
            </button>
          )}
        </div>

      {/* To Date */}
        <div className="flex items-center rounded-md px-3 py-2 relative w-1/2">
          <span className="text-gray-700 mr-2">To</span>
          <span className="relative">
            <CalendarDaysIcon
              size={20}
              className="absolute left-0 -top-[10px] z-10 mx-3"
            />
          </span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
            className="outline-none z-[1] w-full border border-gray-300 p-2 shadow-sm rounded-[10px] pl-10"
            dateFormat="d MMM yyyy"
            minDate={startDate || undefined}
            portalId="root"
          />
          {endDate && (
            <button
              onClick={() => setEndDate(null)}
              className="text-black font-bold absolute z-10 right-6"
            >
              ✕
            </button>
          )}
        </div>
    </div>
  );
};

export default DateRangePicker;
