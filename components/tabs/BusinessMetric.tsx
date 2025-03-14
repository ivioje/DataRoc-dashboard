import React from "react";
import { CardStat } from "@/lib/data";
import Card from "../cards/Card";
import OperatingExpenses from "../charts/Expenses";
import CustomerRetentionChart from "../charts/CustomerRetentionChart";
import RevenueTable from "../RevenueTable";
import MonthlyRecurringRevenueChart from "../charts/RecurringRevenueChart";
import PortfolioComparisonChart from "../charts/PortfolioComparisonChart";

const BusinessMetric = () => {
  return (
    <div>
      <div className="flex">
        <div className="my-1 md:min-w-[60%] w-full">
          <div className="flex md:flex-row flex-col w-full justify-center">
          {/**cards */}
            <div className="flex items-start lgx:justify-center md:justify-start justify-center lgx:w-full mdx:w-fit md:w-[40%] w-full lgx:flex-row flex-col bg-white rounded">
              {CardStat.map((card, index) => (
                <div key={card.id} className="py-2 w-full">
                  <Card
                    title={card.title}
                    figure={card.figure}
                    type={card.type}
                    value={card.value}
                    caption={card.caption}
                    index={index}
                  />
                </div>
              ))}
            </div>
            {/**<1300px */}
            <div className="mdx:min-w-[10%] w-full md:w-[70%] lgx:hidden flex flex-col items-start mt-2 sm:mx-4">
              <div className="w-full"><PortfolioComparisonChart /></div>
              <div className="w-full"><OperatingExpenses /></div>
            </div>
          </div>

          {/**charts */}
          <div className="lgx:m-2 w-full lgx:flex hidden">
            <div className="w-full bg-white max-h-[250px] lgx:w-[60%]"><OperatingExpenses /></div>
            <div className="w-full bg-white lgx:max-h-[250px] h-[330px] lgx:w-[40%] mx-2"><CustomerRetentionChart /></div>
          </div>
          <div className="lgx:block hidden">
            <RevenueTable />
          </div>
        </div>
        <div className="lgx:block hidden">
          <MonthlyRecurringRevenueChart />
          <PortfolioComparisonChart />
        </div>
        <div className="min-w-[30%] lgx:hidden mdx:block hidden mt-2">
          <MonthlyRecurringRevenueChart />
          <CustomerRetentionChart />
        </div>
      </div>
      <div className="w-full mdx:hidden flex sm:flex-row flex-col items-start mt-2">
        <div className="sm:w-1/2 w-full"><MonthlyRecurringRevenueChart /></div>
        <div className="sm:w-1/2 w-full"><CustomerRetentionChart /></div>
      </div>
      <div className="lgx:hidden block">
          <RevenueTable />
      </div>
    </div>
  );
};

export default BusinessMetric;
