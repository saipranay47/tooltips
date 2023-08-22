import React from "react";
import Tooltip from "./components/Tooltip";
import styled from "styled-components";

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
  return (
    <Container>
      <Tooltip
        text={"This is a tooltip"}
        bgcolor="black"
        textcolor="white"
        padding="10px"
        cornerradius="4px"
        tooltipwidth="250px"
        arrowheight="10px"
        horizontalposition={"center"}
        verticalposition={"bottom"}
      >
        <Button data-tooltip="Hover me for a tooltip">Hover me</Button>
      </Tooltip>
    </Container>
  );
}


export default App;
