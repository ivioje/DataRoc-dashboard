"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useGlobalContext } from "./providers";
import { Briefcase, ChevronDown } from "lucide-react";

export default function SelectLikeTab() {
  const { handleSelectChange, selectedValue } = useGlobalContext();

  const isSelected = selectedValue !== "";
  const textColorClass = isSelected ? "text-[#157A6E]" : "text-gray-600";

  return (
    <div className="relative">
      <Select value={selectedValue} onValueChange={handleSelectChange}>
        <SelectTrigger
          className="border-none shadow-none bg-none outline-none text-base text-gray-600 font-medium flex items-center cursor-pointer"
        >
          <Briefcase size={18} className="font-extralight text-gray-400 mr-2" />
          {selectedValue === "business"
            ? "Business Performance Metrics"
            : selectedValue === "website"
            ? "Website Performance Metrics"
            : selectedValue === "user"
            ? "User Behavior Metrics"
            : "Future Performance Metrics"}
          <div className="pointer-events-none absolute inset-y-0 -right-10 flex items-center px-2 mt-1 text-gray-700">
            <ChevronDown />
          </div>
        </SelectTrigger>
        <SelectContent className={`bg-white shadow-sm border-none `}>
          <SelectItem className={`options ${textColorClass}`} value="business">
            Business Performance Metrics
          </SelectItem>
          <SelectItem className={`options ${textColorClass}`} value="website">
            Website Performance Metrics
          </SelectItem>
          <SelectItem className={`options ${textColorClass}`} value="user">
            User Behavior Metrics
          </SelectItem>
          <SelectItem className={`options ${textColorClass}`} value="future">
            Future Performance Metrics
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
