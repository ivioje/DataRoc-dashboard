import CustomerRetentionChart from "@/components/charts/CustomerRetentionChart";
import OperatingExpenses from "@/components/charts/Expenses";
import Filter from "@/components/Filter";
import ParentTab from "@/components/tabs/ParentTab";

const dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Filter />
      <div className="px-12">
        <ParentTab />
      </div>
      <div className="px-14 m-3 flex">
        <OperatingExpenses />
        <CustomerRetentionChart />
      </div>
    </div>
  );
};

export default dashboard;
