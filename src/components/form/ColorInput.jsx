import React, { useRef } from "react";
import styled from "styled-components";

const ColorInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HexInput = styled.input`
  background: #ffffff;
  padding: 12px 10px;
  color: #333333;
  border: 1px solid #cccccc;
  border-radius: 8px 0 0 8px;
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

export const ColorPreview = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 0 8px 8px 0;
  background-color: ${({ color }) => color};
  outline: none;
  cursor: pointer;
  opacity: 1;
  z-index: 1;
`;

export const ColorInput = ({ value, onChange }) => {
  const colorPickerRef = useRef(null);

  const handleHexInputChange = (e) => {
    const hexValue = e.target.value;
    if (/^#([0-9A-F]{0,6})$/i.test(hexValue)) {
      onChange(hexValue);
    }
  };

  const handleColorPreviewClick = () => {
    colorPickerRef.current.click(); 
  };

  const handleColorPickerChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <ColorInputContainer>
      <HexInput
        type="text"
        maxLength="7"
        value={value}
        onChange={handleHexInputChange}
      />
      <ColorPreview color={value} onClick={handleColorPreviewClick} />

      <input
        ref={colorPickerRef}
        type="color"
        value={value}
        onChange={handleColorPickerChange}
        style={{
          position: "absolute",
          left: "55%",
          width: "85px",
          height: "40px",
          opacity: "0",
        }}
      />
    </ColorInputContainer>
  );
};
