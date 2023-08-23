import React from "react";
import { useTooltipContext } from "../../context/TooltipContext";
import { FormContainer, FlexBox } from "./FormElements";
import { ColorInput } from "./inputs/ColorInput";
import SelectField from "./inputs/SelectField";
import InputField from "./inputs/InputField";
import ImageInput from "./inputs/ImageInput";

const TooltipForm = () => {
  const { formData, updateFormData } = useTooltipContext();

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <FormContainer>
      <SelectField
        label="Target Element:"
        value={formData.targetElement}
        options={["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"]}
        onChange={(value) => handleInputChange("targetElement", value)}
      />
      <InputField
        label="Tooltip Text:"
        type="text"
        value={formData.tooltipText}
        onChange={(value) => handleInputChange("tooltipText", value)}
      />
      <FlexBox>
        <ImageInput
          label="Image Upload:"
          onChange={(file) => handleInputChange("imageFile", file)}
        />
        <SelectField
          label="Image Position:"
          value={formData.imageposition}
          options={["Left", "Right", "Top", "Bottom"]}
          onChange={(value) => handleInputChange("imageposition", value)}
        />
      </FlexBox>
      <FlexBox>
        <InputField
          label="Text Size:"
          type="number"
          value={formData.textSize}
          onChange={(value) => handleInputChange("textSize", parseInt(value))}
        />
        <InputField
          label="Padding:"
          type="number"
          value={formData.padding}
          onChange={(value) => handleInputChange("padding", parseInt(value))}
        />
      </FlexBox>
      <ColorInput
        label="Text Color:"
        value={formData.textColor}
        onChange={(value) => handleInputChange("textColor", value)}
      />
      <ColorInput
        label="Background Color:"
        value={formData.backgroundColor}
        onChange={(value) => handleInputChange("backgroundColor", value)}
      />
      <FlexBox>
        <InputField
          label="Corner Radius:"
          type="number"
          value={formData.cornerRadius}
          onChange={(value) =>
            handleInputChange("cornerRadius", parseInt(value))
          }
        />
        <InputField
          label="Tooltip Width:"
          type="number"
          value={formData.tooltipWidth}
          onChange={(value) =>
            handleInputChange("tooltipWidth", parseInt(value))
          }
          placeholder="Auto"
        />
      </FlexBox>
      <InputField
        label="Arrow Size:"
        type="number"
        value={formData.arrowSize}
        onChange={(value) => handleInputChange("arrowSize", parseInt(value))}
      />
    </FormContainer>
  );
};

export default TooltipForm;
