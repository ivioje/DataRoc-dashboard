"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { employees } from "@/lib/data";
import ButtonComponent from "./Button";

export default function RevenueTable() {
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState(employees);
  const [selectedFilter, setSelectedFilter] = useState("Default");

  const filterUsers = (filter: string) => {
    if (filter === "All") {
      setIsActive("All");
      return setFilteredUsers([...employees]);
    }
    setFilteredUsers(
      employees.filter((employee) => employee.deposit === filter)
    );
    setIsActive(filter);
  };

  return (
    <div className="p-6 my-10">
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
        <div className="flex items-center w-full">
          <div className="bg-white">
            <input type="radio" id="default" name="filter" value="Default" />
            <label htmlFor="default">Default</label>
            <br />
          </div>
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
