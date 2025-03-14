"use client";
import { useEffect } from "react";
import { Filter, Search } from "lucide-react";
import ButtonComponent from "./shared/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  RadioGroup,
} from "@radix-ui/react-dropdown-menu";
import { formatDate } from "@/utils/formatDate";
import { IoIosArrowDropdown } from "react-icons/io";
import { useRevenueStore } from "@/store/revenue-store";

export default function RevenueTable() {
  const { 
    filteredUsers, 
    search, 
    isActive, 
    sortBy, 
    title, 
    total,
    setSearch,
    setSortBy,
    filterUsers,
    isAllSelected,
    isRowSelected,
    toggleSelectAll,
    toggleSelectRow
  } = useRevenueStore();

  useEffect(() => {
    filterUsers("All");
  }, []);

  return (
  <div className="p-6 mb-5 mt-3">
      <h2 className="text-gray-500 w-full uppercase text-[12px] font-semibold mb-4 flex items-start">
        Revenue Per Employee
      </h2>
      <div className="flex justify-between items-center mb-3 border-b border-t-0 border-l-0 border-r-0 border-[#CFFAFE]">
        <div className="flex font-medium text-sm">
          <button
            onClick={() => filterUsers("All")}
            className={`px-4 py-2 text-gray-600 ${
              isActive === "All"
                ? "border-[3px] border-t-0 border-l-0 border-r-0 border-black"
                : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => filterUsers("Paid")}
            className={`px-4 py-2 text-gray-600 ${
              isActive === "Paid"
                ? "border-[3px] border-t-0 border-l-0 border-r-0 border-black"
                : ""
            }`}
          >
            Paid
          </button>
          <button
            onClick={() => filterUsers("Unpaid")}
            className={`px-4 py-2 text-gray-600 ${
              isActive === "Unpaid"
                ? "border-[3px] border-t-0 border-l-0 border-r-0 border-black"
                : ""
            }`}
          >
            Unpaid
          </button>
          <button
            onClick={() => filterUsers("Overdue")}
            className={`px-4 py-2 text-gray-600 ${
              isActive === "Overdue"
                ? "border-[3px] border-t-0 border-l-0 border-r-0 border-black"
                : ""
            }`}
          >
            Overdue
          </button>
        </div>
        <div className="text-cyan-900">
          <span className="text-sm">Total {title}: </span>
          <span className="font-bold text-sm md:text-base text-gray-950">${total} </span>
          <span className="md:text-base text-[12px]">USD</span>
        </div>
      </div>

      <div className="relative flex items-center justify-between py-2 rounded-md w-full mt-8 mb-1">
        <div className="flex items-center w-full relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center space-x-2 mr-3 border border-[#CFFAFE] p-2 rounded-[5px]">
                <Filter size={18} /> <span className="text-sm">Filter</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white min-w-[220px] px-2 py-3 text-sm shadow-md rounded-[10px] absolute top-2 -left-10 z-30">
              <p className="text-[12px] font-light uppercase mb-2 text-[#6E6893]">
                Sort By:
              </p>
              <RadioGroup
                value={sortBy}
                onValueChange={setSortBy}
                className="space-y-2"
              >
                {[
                  "Default",
                  "First Name",
                  "Last Name",
                  "Due Date",
                  "Last Login",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center justify-between hover:bg-purple-50 p-[2px] cursor-pointer"
                  >
                    <span>{option}</span>
                    <input
                      type="radio"
                      name="sortBy"
                      value={option}
                      checked={sortBy === option}
                      onChange={() => setSortBy(option)}
                      className="hidden peer appearance-none text-[12px]"
                    />
                    <div className="w-[14px] h-[14px] border-2 border-[#6D5BD0] rounded-full flex items-center justify-center peer-checked:bg-[#6D5BD0]">
                      <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                    </div>
                  </label>
                ))}
              </RadioGroup>

              <div className="my-3 border-t"></div>

              <p className="text-[12px] font-light uppercase mb-2 text-[#6E6893]">
                Users:
              </p>
              <RadioGroup
                value={isActive}
                onValueChange={filterUsers}
                className="space-y-2"
              >
                {["All", "Active", "Inactive"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center justify-between hover:bg-purple-50 p-[2px] cursor-pointer"
                  >
                    <span>{option}</span>
                    <input
                      type="radio"
                      name="isActive"
                      value={option}
                      checked={isActive === option}
                      onChange={() => filterUsers(option)}
                      className="hidden peer appearance-none text-[12px]"
                    />
                    <div className="w-[14px] h-[14px] border-2 border-[#6D5BD0] rounded-full flex items-center justify-center peer-checked:bg-[#6D5BD0]">
                      <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center w-[40%] relative bg-[#ECFEFF]">
            <Search size={20} className="text-gray-800 absolute mx-3" />
            <input
              type="text"
              placeholder="Search Users by Name, Email or Date"
              className="outline-none bg-[#ECFEFF] w-full ml-8 rounded py-2 px-2 placeholder:text-gray-600 placeholder:text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <ButtonComponent text="Download Invoice" />
      </div>

    <div className="md:overflow-auto overflow-x-scroll">
      <table className="w-full text-left border-collapse z-10 bg-white py-3">
      <thead>
        <tr className="bg-[#ECFEFF] border border-r-0 border-l-0 text-cyan-900 text-[13px] text-nowrap">
          <th className="py-[6px] px-3">
            <input 
              type="checkbox" 
              className="w-4 h-4 cursor-pointer" 
              checked={isAllSelected()}
              onChange={toggleSelectAll}
              aria-label="Select all rows"
            />
          </th>
          <th className="py-[6px] px-3"></th>
          <th className="py-[6px] px-3 font-medium uppercase text-gray-700">
            Employee Name
          </th>
          <th className="py-[6px] px-3 font-medium uppercase text-gray-700">
            Employee Status
          </th>
          <th className="py-[6px] px-3 font-medium uppercase text-gray-700">
            Deposit Status
          </th>
          <th className="py-[6px] px-3 font-medium uppercase text-gray-700">
            Amount
          </th>
          <th className="py-[6px] px-3 font-medium uppercase text-gray-700"></th>
          <th className="py-[6px] px-3 font-medium uppercase text-gray-700"></th>
          <th className="py-2 text-2xl pr-2 text-gray-900 cursor-pointer">
            &#8942;
          </th>
        </tr>
      </thead>
      {!filteredUsers.length && (
        <tbody className="w-full">
          <tr className="">
            <td colSpan={9} className="text-cyan-900 text-center py-2">Nothing Found!</td>
          </tr>
        </tbody>
      )}
      <tbody>
        {filteredUsers.map((employee) => (
          <tr
            key={employee.id}
            className={`border-b transition-transform duration-300 relative ${
              isRowSelected(employee.id) ? "bg-cyan-50" : ""
            }`}
          >
            <td className="py-2 px-3">
              <input 
                type="checkbox" 
                className="w-4 h-4 cursor-pointer" 
                checked={isRowSelected(employee.id)}
                onChange={() => toggleSelectRow(employee.id)}
                aria-label={`Select ${employee.name}`}
              />
            </td>
            <td className="py-2 px-3 text-cyan-900">
              <IoIosArrowDropdown />
            </td>
            <td className="py-2 px-3">
              <p className="font-medium text-sm">{employee.name}</p>
              <p className="text-gray-500 text-[13px]">{employee.email}</p>
            </td>
            <td className="py-2 px-3">
              <span
                className={`px-2 flex w-fit items-center rounded-full text-[12px] bg-gray-200 ${
                  employee.status === "Active"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                <span className="text-2xl -mt-1">•</span>
                {employee.status}
              </span>
            </td>
            <td className="py-2 px-3">
              <span
                className={`px-2 py-1 rounded-full text-[12px] ${
                  employee.deposit === "Paid"
                    ? "bg-green-100 text-green-700"
                    : employee.deposit === "Unpaid"
                    ? "bg-red-100 text-red-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {employee.deposit}
              </span>
              <p className="text-gray-500 text-sm">
                Paid on {formatDate(employee.paymentDate)}
              </p>
            </td>
            <td className="py-2 px-3 font-medium">
              <span className="ml-6 text-[15px]">${employee.amount}</span> <br />
              <span className="text-sm text-cyan-900 text-right ml-8">
                USD
              </span>
            </td>
            <td className="py-2 px-3 text-cyan-900 text-sm cursor-pointer">
              View More
            </td>
            <td className="py-2 text-3xl text-gray-900 cursor-pointer absolute right-2 w-fit">
              &#8942;
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
  );
}
