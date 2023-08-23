import React from "react";
import { MobileContainer, Row } from "./MobilePreviewElements";
import ButtonComp from "./ButtonComp";
function MobilePreview() {
  return (
    <MobileContainer>
      <Row>
        <ButtonComp
          number={1}
          horizontalposition={"start"}
          verticalposition={"bottom"}
        />
        <ButtonComp
          number={2}
          horizontalposition={"end"}
          verticalposition={"bottom"}
        />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <ButtonComp
          number={3}
          horizontalposition={"center"}
          verticalposition={"bottom"}
        />
      </Row>
      <Row>
        <ButtonComp
          number={4}
          horizontalposition={"start"}
          verticalposition={"top"}
        />
        <ButtonComp
          number={5}
          horizontalposition={"end"}
          verticalposition={"top"}
        />
      </Row>
    </MobileContainer>
  );
}

export default MobilePreview;
