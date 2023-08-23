import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
  width: 100%;
  margin-right: 80px;
  height: 100%;
  background-color: #f3f3f3;
  border-radius: 24px;
`;

export const Select = styled.select`
  padding: 5px;
  margin: 6px 0px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  min-width: 350px;
  padding: 12px 10px;
`;

export const Input = styled.input`
  background: #ffffff;
  padding: 12px 10px;
  color: #333333;
  border: 1px solid #cccccc;
  border-radius: 8px;
  transition: border-color 0.3s, outline-color 0.3s;
  width: 100%;
  min-width: 350px;
  margin: 6px 0px;

  &::placeholder {
    color: #999999;
  }

  :hover {
    outline-color: #cccccc;
  }

  :focus,
  :active {
    border-color: #007bff;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
