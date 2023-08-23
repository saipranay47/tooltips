import React from "react";
import PropTypes from "prop-types";
import { Label, Select } from "../FormElements";

const SelectField = ({ label, value, options, onChange }) => {
  return (
    <Label>
      {label}
      <br />
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Label>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectField;
