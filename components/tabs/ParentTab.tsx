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
          Website Performance Metrics content.
        </TabsContent>
        <TabsContent value="user">User Behavior Metrics content.</TabsContent>
        <TabsContent value="future">
          Future Performance Metrics content.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ParentTab;
