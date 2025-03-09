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
    <div className="flex">
      <div className="my-1 min-w-[70%]">
        <div className="flex w-full">
        {/**cards */}
          <div className="flex items-start lgx:justify-center justify-start lgx:w-full w-fit lgx:flex-row flex-col bg-white rounded">
            {CardStat.map((card, index) => (
              <div key={card.id} className="py-2">
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
          <div className="min-w-[10%] lgx:hidden flex flex-row-reverse items-start lgx:mt-0 mt-2">
            <MonthlyRecurringRevenueChart />
            <PortfolioComparisonChart />
          </div>
        </div>

        {/**charts */}
        <div className="m-2 flex">
          <OperatingExpenses />
          <CustomerRetentionChart />
        </div>
        <div>
          <RevenueTable />
        </div>
      </div>
      <div className="min-w-[10%] lgx:block hidden">
        <MonthlyRecurringRevenueChart />
        <PortfolioComparisonChart />
      </div>
    </div>
  );
};

export default BusinessMetric;
