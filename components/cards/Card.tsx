import React from "react";
import { CardInterface } from "@/lib/interfaces";
import { ArrowDown, ArrowUp } from "lucide-react";
import { formatNumber } from "@/utils/formatNumber";

const Card = ({index, ...props}: CardInterface & { index: number }) => {
  return (
    <div className={`flex items-start flex-col justify-start w-full py-2 px-3 exl:min-w-[250px] exl:mx-0 border-t-0 lgx:border-b-0 border-r-0 border ${index === 0 ? "border-l-0" : "lgx:border-l border-l-0"}`}>
      <div className="flex justify-between items-center w-full">
        <h4 className="uppercase text-gray-500 font-semibold lgx:text-[12px] text-[11px]">
          {props.title}
        </h4>
        <span className="bg-gray-100 rounded-full px-1 py-1">
          {props.type === "increase" ? (
            <ArrowUp size={17} className="text-lime-500" />
          ) : (
            <ArrowDown size={17} className="text-red-500" />
          )}
        </span>
      </div>
      <span className="lgx:text-xl text-base font-semibold my-4">
        {props.title === "total income"
          ? `$${formatNumber(props.figure)}`
          : formatNumber(props.figure)}
      </span>
      <div className="flex justify-between items-start text-[11px]">
        <span
          className={`${
            props.type === "increase" ? "text-lime-500" : "text-red-500"
          } mr-1`}
        >
          {props.value}%
        </span>
        <span className="text-gray-500 font-light text-nowrap">{props.caption}</span>
      </div>
    </div>
  );
};

export default Card;
