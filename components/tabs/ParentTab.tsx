"use client";
import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { TabsContent } from "../ui/tabs";
import { useTabStore } from "@/store/tab-store";
import BusinessMetric from "./BusinessMetric";
import WebsitePerformanceMetrics from "./WebsitePerformanceMetricsTab";

const ParentTab = () => {
  const tab = useTabStore((state: any) => state.tab)
  return (
    <div>
      <Tabs
        value={tab.selectedValue}
        onValueChange={tab.handleChangeTab}
        className="mt-3"
      >
        <TabsContent value="business">
          <BusinessMetric />
        </TabsContent>
        <TabsContent value="website">
          <WebsitePerformanceMetrics />
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
