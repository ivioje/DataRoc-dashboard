"use client";

import { defaultContextValue, GlobalContextType } from "@/lib/interfaces";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

export const GlobalProvider = ({ children }) => {
  const [tab, setTab] = useState(null);
  const [selectedValue, setSelectedValue] = useState("business");

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const contextValue = { tab, setTab, selectedValue, handleSelectChange };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;
