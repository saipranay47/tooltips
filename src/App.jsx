import React from "react";
import styled from "styled-components";
import TooltipForm from "./components/form/Form";
import MobilePreview from "./components/preview/MobilePreview";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100vw;
  max-width: 1400px;

  /* media query at 1000px */
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

function App() {
  return (
    <Container>
      <TooltipForm />
      <MobilePreview />
    </Container>
  );
}

export default App;
