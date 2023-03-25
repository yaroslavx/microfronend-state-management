import React, { createContext, useContext, useState } from "react";

const CountContext = createContext([0, () => {}]);

export const CountProvider = ({ children }) => {
  return (
    <CountContext.Provider value={useState(0)}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  return useContext(CountContext);
};
