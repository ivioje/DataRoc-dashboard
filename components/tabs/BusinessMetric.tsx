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
        <div className="my-1 min-w-[70%]">
          <div className="flex w-full justify-center">
          {/**cards */}
            <div className="flex items-start lgx:justify-center justify-start lgx:w-full mdx:w-fit sm:w-[40%] w-full lgx:flex-row flex-col bg-white rounded">
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
            <div className="mdx:min-w-[10%] sm:w-[70%] lgx:hidden border flex flex-col items-start mt-2 mx-4">
              {/* <div className="lgx:block hidden"><MonthlyRecurringRevenueChart /></div> */}
              <div className="w-full"><PortfolioComparisonChart /></div>
              <div className="w-full border"><OperatingExpenses /></div>
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
        <div className=" lgx:block hidden">
          <MonthlyRecurringRevenueChart />
          <PortfolioComparisonChart />
        </div>
        <div className="min-w-[10%] lgx:hidden mdx:block hidden mt-2">
          <MonthlyRecurringRevenueChart />
          <CustomerRetentionChart />
        </div>
      </div>
      <div className="min-w-[10%] mdx:hidden flex items-start mt-2">
          <MonthlyRecurringRevenueChart />
          <CustomerRetentionChart />
      </div>
      <div className="lgx:hidden block">
          <RevenueTable />
      </div>
    </div>
  );
};

export default BusinessMetric;
