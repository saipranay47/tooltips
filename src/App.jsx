import React from "react";
import Tooltip from "./components/Tooltip";
import styled from "styled-components";
import { useTooltipContext } from "./context/TooltipContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 100%;
  width: 100vw;
`;

const Button = styled.button`
  width: fit-content;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #f9f9f9;
  color: #000;
  cursor: pointer;
`;


function App() {
  const { formData } = useTooltipContext();
  return (
    <Container>
      <Tooltip
        text={formData.tooltipText}
        bgcolor={formData.backgroundColor}
        textcolor={formData.textColor}
        padding={formData.padding + "px"}
        cornerradius={formData.cornerRadius + "px"}
        tooltipwidth={formData.tooltipWidth + "px"}
        arrowheight={formData.arrowSize + "px"}
        horizontalposition={"center"}
        verticalposition={"bottom"}
      >
        <Button >Hover me</Button>
      </Tooltip>
    </Container>
  );
}


export default App;
