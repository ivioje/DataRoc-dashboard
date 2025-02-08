import React from "react";
import { CardInterface } from "@/lib/interfaces";
import { ArrowDown, ArrowUp } from "lucide-react";
import { formatNumber } from "@/utils/formatNumber";

const Card = (props: CardInterface) => {
  return (
    <div className="flex items-start flex-col justify-start w-full py-2 px-4 border-l border-t-0 border-b-0 border-r-0 border-[4px]">
      <div className="flex justify-between items-center w-full">
        <h4 className="uppercase text-gray-500 font-semibold text-[14px]">
          {props.title}
        </h4>
        <span className="bg-gray-50 rounded-full px-2 py-1">
          {props.type === "increase" ? (
            <ArrowUp size={20} className="text-green-500" />
          ) : (
            <ArrowDown size={20} className="text-red-500" />
          )}
        </span>
      </div>
      <span className="text-2xl font-semibold my-4">
        {props.title === "total income"
          ? `$${formatNumber(props.figure)}`
          : formatNumber(props.figure)}
      </span>
      <div className="flex justify-between items-center text-[13px]">
        <span
          className={`${
            props.type === "increase" ? "text-green-500" : "text-red-500"
          } mr-1`}
        >
          {props.value}%
        </span>
        <span className="text-gray-400 font-light">{props.caption}</span>
      </div>
    </div>
  );
};

export default Card;
