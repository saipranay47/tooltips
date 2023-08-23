import React, { createContext, useState, useContext } from "react";

const TooltipContext = createContext();

export function TooltipProvider({ children }) {
  const [formData, setFormData] = useState({
    targetElement: "Button 3",
    tooltipText: "Tooltip text goes here",
    textSize: 14,
    padding: 10,
    textColor: "#ffffff",
    backgroundColor: "#000000",
    cornerRadius: 5,
    tooltipWidth: "",
    arrowSize: 10,
    imageFile: null,
    imageposition: "Left",
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
