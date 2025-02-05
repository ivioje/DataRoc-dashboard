import React from "react";
import { CardStat } from "@/lib/data";
import Card from "./Card";
import OperatingExpenses from "./charts/Expenses";
import CustomerRetentionChart from "./charts/CustomerRetentionChart";

const BusinessMetric = () => {
  return (
    <div className="my-2">
      {/**cards */}
      <div className="flex items-center justify-center bg-white rounded">
        {CardStat.map((card) => (
          <div key={card.id} className="py-3">
            <Card
              title={card.title}
              figure={card.figure}
              type={card.type}
              value={card.value}
              caption={card.caption}
            />
          </div>
        ))}
      </div>

      {/**charts */}
      <div className="m-2 flex">
        <OperatingExpenses />
        <CustomerRetentionChart />
      </div>
    </div>
  );
};

export default BusinessMetric;
