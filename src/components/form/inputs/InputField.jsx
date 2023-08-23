import React from "react";
import PropTypes from "prop-types";
import { Label, Input } from "../FormElements";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <Label>
      {label}
      <br />
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
