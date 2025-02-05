"use client";
import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { TabsContent } from "../ui/tabs";
import { useGlobalContext } from "../providers";
import BusinessMetric from "../BusinessMetric";

const ParentTab = () => {
  const { selectedValue, handleSelectChange } = useGlobalContext();
  return (
    <div>
      {/* Tabs Component */}
      <Tabs
        value={selectedValue}
        onValueChange={handleSelectChange}
        className="mt-4"
      >
        <TabsContent value="business">
          <BusinessMetric />
        </TabsContent>
        <TabsContent value="website">
          Display content related to Website Performance Metrics here.
        </TabsContent>
        <TabsContent value="user">
          Display content related to User Behavior Metrics here.
        </TabsContent>
        <TabsContent value="future">
          Display content related to Future Performance Metrics here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ParentTab;
