"use client";
import { Select, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
import { Briefcase, ChevronDown } from "lucide-react";
import { useTabStore } from "@/store/tab-store";

export default function SelectLikeTab() {
  const tab = useTabStore((state: any) => state.tab)
  const isSelected = tab.selectedValue !== "";
  const textColorClass = isSelected ? "text-[#157A6E]" : "text-gray-600";

  return (
    <div className="relative">
      <Select value={tab.selectedValue} onValueChange={tab.handleChangeTab}>
        <SelectTrigger
          className="border-none shadow-none bg-none outline-none md:text-base text-sm text-gray-600 font-medium flex items-center cursor-pointer"
        >
          <Briefcase size={18} className="font-extralight text-gray-400 mr-2 sm:block hidden" />
          {tab.selectedValue === "business"
            ? "Business Performance Metrics"
            : tab.selectedValue === "website"
            ? "Website Performance Metrics"
            : tab.selectedValue === "user"
            ? "User Behavior Metrics"
            : "Future Performance Metrics"}
          <div className="pointer-events-none absolute inset-y-0 lg:-right-10 sm:-right-7 -right-[22px] mt-[2px] flex items-center md:px-2 p-[10px] md:mt-1 text-gray-700">
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
