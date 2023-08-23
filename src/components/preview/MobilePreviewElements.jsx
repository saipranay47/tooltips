import styled from "styled-components";

export const MobileContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border: 10px solid black;
  border-radius: 20px;
  height: 100%;
  min-height: 800px;

  padding: 16px;
  margin: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #b8b8b8;
`;
export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #ffffff;
  color: #000;
  cursor: pointer;
`;
