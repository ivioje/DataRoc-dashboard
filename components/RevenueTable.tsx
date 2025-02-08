"use client";
import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { employees } from "@/lib/data";
import ButtonComponent from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  RadioGroup,
} from "@radix-ui/react-dropdown-menu";

export default function RevenueTable() {
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState(employees);
  const [sortBy, setSortBy] = useState("Default");
  const [userType, setUserType] = useState("All");

  const filterUsers = (filter: string) => {
    if (filter === "All") {
      setIsActive("All");
      return setFilteredUsers([...employees]);
    }
    if (filter === "Active") {
      setIsActive("Active");
      return setFilteredUsers(
        employees.filter((employee) => employee.status === filter)
      );
    }
    setFilteredUsers(
      employees.filter((employee) => employee.deposit === filter)
    );
    setIsActive(filter);
  };

  return (
    <div className="p-6 my-5">
      <h2 className="text-gray-500 w-full uppercase text-sm font-semibold mb-4 flex items-start">
        Revenue Per Employee
      </h2>
      <div className="flex justify-between items-center mb-4 border-b border-t-0 border-l-0 border-r-0 border-[#CFFAFE]">
        <div className="flex font-medium">
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
      </div>

      <div className="relative flex items-center justify-between py-2 rounded-md w-full mt-8 mb-1">
        <div className="flex items-center w-full relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center space-x-2 mr-3 border border-[#CFFAFE] p-2 rounded-[5px]">
                <Filter size={20} /> <span>Filter</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white min-w-[220px] px-2 py-3 shadow-md rounded-[10px] absolute top-2 -left-10">
              <p className="text-sm font-light uppercase mb-2 text-[#6E6893]">
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
                      onClick={() => filterUsers(option)}
                      className="hidden peer appearance-none"
                    />
                    <div className="w-4 h-4 border-2 border-[#6D5BD0] rounded-full flex items-center justify-center peer-checked:bg-[#6D5BD0]">
                      <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                    </div>
                  </label>
                ))}
              </RadioGroup>

              <div className="my-3 border-t"></div>

              <p className="text-sm font-light uppercase mb-2 text-[#6E6893]">
                Users:
              </p>
              <RadioGroup
                value={isActive}
                onValueChange={setIsActive}
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
                      onChange={() => setIsActive(option)}
                      className="hidden peer appearance-none"
                    />
                    <div className="w-4 h-4 border-2 border-[#6D5BD0] rounded-full flex items-center justify-center peer-checked:bg-[#6D5BD0]">
                      <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center w-[40%] relative bg-[#ECFEFF]">
            <Search size={25} className="text-gray-800 absolute mx-3" />
            <input
              type="text"
              placeholder="Search Users by Name, Email or Date"
              className="outline-none bg-[#ECFEFF] w-full ml-10 rounded py-2 px-2 placeholder:text-gray-600 placeholder:text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <ButtonComponent text="Download Invoice" />
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#ECFEFF] border border-r-0 border-l-0">
            <th className="py-2 px-3">
              <input type="checkbox" />
            </th>
            <th className="py-2 px-3 font-medium uppercase text-sm text-gray-700">
              Employee Name
            </th>
            <th className="py-2 px-3 font-medium uppercase text-sm text-gray-700">
              Employee Status
            </th>
            <th className="py-2 px-3 font-medium uppercase text-sm text-gray-700">
              Deposit Status
            </th>
            <th className="py-2 px-3 font-medium uppercase text-sm text-gray-700">
              Amount
            </th>
            <th className="py-2 px-3 font-medium uppercase text-sm text-gray-700"></th>
            <th className="py-2 px-3 font-medium uppercase text-sm text-gray-700"></th>
            <th className="py-3 text-4xl text-gray-900 cursor-pointer">
              &#8942;
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((employee) => (
            <tr key={employee.id} className="border-b">
              <td className="py-3 px-3">
                <input type="checkbox" />
              </td>
              <td className="py-3 px-3">
                <p className="font-medium">{employee.name}</p>
                <p className="text-gray-500 text-sm">{employee.email}</p>
              </td>
              <td className="py-3 px-3">
                <span className="px-2 flex w-fit items-center rounded-full text-sm bg-gray-200 text-green-700">
                  <span className="text-2xl">•</span>
                  {employee.status}
                </span>
              </td>
              <td className="py-3 px-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    employee.deposit === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {employee.deposit}
                </span>
                <p className="text-gray-500 text-sm">
                  Paid on {employee.paymentDate}
                </p>
              </td>
              <td className="py-3 px-3 font-medium">${employee.amount} USD</td>
              <td className="py-3 px-3 text-blue-600 cursor-pointer">
                View More
              </td>
              <td className="py-3 text-4xl text-gray-900 cursor-pointer ml-4">
                &#8942;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
