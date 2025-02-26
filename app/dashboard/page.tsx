import Filter from "@/components/shared/Filter";
import ParentTab from "@/components/tabs/ParentTab";

const dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Filter />
      <div className="px-11">
        <ParentTab />
      </div>
    </div>
  );
};

export default dashboard;
