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
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"start"}
          verticalposition={"bottom"}
        >
          <Button>Hover me</Button>
        </Tooltip>
        <Tooltip
          text={formData.tooltipText}
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"end"}
          verticalposition={"bottom"}
        >
          <Button>Hover me</Button>
        </Tooltip>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Tooltip
          text={formData.tooltipText}
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"center"}
          verticalposition={"bottom"}
        >
          <Button>Hover me</Button>
        </Tooltip>
      </Row>
      <Row>
        <Tooltip
          text={formData.tooltipText}
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"start"}
          verticalposition={"top"}
        >
          <Button>Hover me</Button>
        </Tooltip>
        <Tooltip
          text={formData.tooltipText}
          bgcolor={formData.backgroundColor}
          textcolor={formData.textColor}
          padding={formData.padding + "px"}
          cornerradius={formData.cornerRadius + "px"}
          tooltipwidth={formData.tooltipWidth}
          arrowheight={formData.arrowSize + "px"}
          horizontalposition={"end"}
          verticalposition={"top"}
        >
          <Button>Hover me</Button>
        </Tooltip>
      </Row>
    </MobileContainer>
  );
}

export default MobilePreview;
