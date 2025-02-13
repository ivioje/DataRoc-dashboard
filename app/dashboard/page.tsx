import Filter from "@/components/Filter";
import ParentTab from "@/components/tabs/ParentTab";

const dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Filter />
      <div className="px-12">
        <ParentTab />
      </div>
    </div>
  );
};

export default dashboard;
