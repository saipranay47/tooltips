import React from "react";
import Tooltip from "../Tooltip";
import { useTooltipContext } from "../../context/TooltipContext";
import { Button } from "./MobilePreviewElements";

function ButtonComp({ number }) {
  const { formData } = useTooltipContext();

  return (
    <Tooltip
      text={formData.tooltipText}
      textsize={formData.textSize + "px"}
      bgcolor={formData.backgroundColor}
      textcolor={formData.textColor}
      padding={formData.padding + "px"}
      cornerradius={formData.cornerRadius + "px"}
      tooltipwidth={formData.tooltipWidth}
      arrowheight={formData.arrowSize + "px"}
      horizontalposition={"start"}
      verticalposition={"bottom"}
      alwaysvisible={formData.targetElement === "button" + number}
      imageFile={formData.imageFile}
      imageposition={formData.imageposition}
    >
      <Button>Button {number}</Button>
    </Tooltip>
  );
}

export default ButtonComp;
