import React from "react";
import { MobileContainer, Row } from "./MobilePreviewElements";
import ButtonComp from "./ButtonComp";
function MobilePreview() {
  return (
    <MobileContainer>
      <Row>
        <ButtonComp number={1} />
        <ButtonComp number={2} />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <ButtonComp number={3} />
      </Row>
      <Row>
        <ButtonComp number={4} />
        <ButtonComp number={5} />
      </Row>
    </MobileContainer>
  );
}

export default MobilePreview;
