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
  max-width: 1300px;
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
