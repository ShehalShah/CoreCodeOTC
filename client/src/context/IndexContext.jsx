import React, { createContext, useState } from "react";

// Create the context
export const IndexContext = createContext();

// Create the provider component
export const IndexProvider = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      {children}
    </IndexContext.Provider>
  );
};
