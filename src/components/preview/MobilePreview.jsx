import React from "react";
import Tooltip from "../Tooltip";
import { useTooltipContext } from "../../context/TooltipContext";
import { MobileContainer, Button, Row } from "./MobilePreviewElements";

function MobilePreview() {
  const { formData } = useTooltipContext();
  return (
    <MobileContainer>
      <Row>
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
          alwaysvisible={formData.targetElement === "button1"}
        >
          <Button>Button 1</Button>
        </Tooltip>
        <Tooltip
          text={formData.tooltipText}
          textsize={formData.textSize + "px"}
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"end"}
          verticalposition={"bottom"}
          alwaysvisible={formData.targetElement === "button2"}
        >
          <Button>Button 2</Button>
        </Tooltip>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Tooltip
          text={formData.tooltipText}
          textsize={formData.textSize + "px"}
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"center"}
          verticalposition={"bottom"}
          alwaysvisible={formData.targetElement === "button3"}
        >
          <Button>Button 3</Button>
        </Tooltip>
      </Row>
      <Row>
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
          verticalposition={"top"}
          alwaysvisible={formData.targetElement === "button4"}
        >
          <Button>Button 4</Button>
        </Tooltip>
        <Tooltip
          text={formData.tooltipText}
          textsize={formData.textSize + "px"}
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"end"}
          verticalposition={"top"}
          alwaysvisible={formData.targetElement === "button5"}
        >
          <Button>Button 5</Button>
        </Tooltip>
      </Row>
    </MobileContainer>
  );
}

export default MobilePreview;
