import Filter from "@/components/shared/Filter";
import ParentTab from "@/components/tabs/ParentTab";

const dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Filter />
      <div className="xl:px-11 lg:px-9 px-6">
        <ParentTab />
      </div>
    </div>
  );
};

export default dashboard;
