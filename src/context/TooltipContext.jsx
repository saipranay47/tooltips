import React, { createContext, useState, useContext } from "react";

const TooltipContext = createContext();

export function TooltipProvider({ children }) {
  const [formData, setFormData] = useState({
    targetElement: "",
    tooltipText: "Tooltip text goes here",
    textSize: 14,
    padding: 10,
    textColor: "#fff",
    backgroundColor: "#000",
    cornerRadius: 5,
    tooltipWidth: "",
    arrowSize: 10,
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <TooltipContext.Provider value={{ formData, updateFormData }}>
      {children}
    </TooltipContext.Provider>
  );
}

export function useTooltipContext() {
  return useContext(TooltipContext);
}
