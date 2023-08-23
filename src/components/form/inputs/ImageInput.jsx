import React from "react";
import PropTypes from "prop-types";
import { Label, Input } from "../FormElements";

const ImageInput = ({ label, onChange }) => {
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
  };

  return (
    <Label>
      {label}
      <br />
      <Input type="file" accept="image/*" onChange={handleFileInputChange} />
    </Label>
  );
};

ImageInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
