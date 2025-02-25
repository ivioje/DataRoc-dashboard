import React from "react";
import { CardStat } from "@/lib/data";
import Card from "../Card";
import OperatingExpenses from "../charts/Expenses";
import CustomerRetentionChart from "../charts/CustomerRetentionChart";
import RevenueTable from "../RevenueTable";
import MonthlyRecurringRevenueChart from "../charts/RecurringRevenueChart";
import PortfolioComparisonChart from "../charts/PortfolioComparisonChart";

const BusinessMetric = () => {
  return (
    <div className="flex">
      <div className="my-1 max-w-[75%]">
        {/**cards */}
        <div className="flex items-center justify-center bg-white rounded">
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

        {/**charts */}
        <div className="m-2 flex">
          <OperatingExpenses />
          <CustomerRetentionChart />
        </div>
        <div>
          <RevenueTable />
        </div>
      </div>
      <div className="max-w-[30%]">
        <MonthlyRecurringRevenueChart />
        <PortfolioComparisonChart />
      </div>
    </div>
  );
};

export default BusinessMetric;
