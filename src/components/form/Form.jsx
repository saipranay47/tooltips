import React from "react";
import { useTooltipContext } from "../../context/TooltipContext";
import {
  FormContainer,
  Label,
  Select,
  Input,
  FlexBox,
} from "./FormElements";

import { ColorInput } from "./ColorInput";

const TooltipForm = () => {
  const { formData, updateFormData } = useTooltipContext();

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <FormContainer>
      <Label>
        Target Element:
        <br />
        <Select
          value={formData.targetElement}
          onChange={(e) => handleInputChange("targetElement", e.target.value)}
        >
          <option value="button1">Button 1</option>
          <option value="button2">Button 2</option>
          <option value="button3">Button 3</option>
          <option value="button4">Button 4</option>
          <option value="button5">Button 5</option>
        </Select>
      </Label>
      <Label>
        Tooltip Text:
        <br />
        <Input
          type="text"
          value={formData.tooltipText}
          onChange={(e) => handleInputChange("tooltipText", e.target.value)}
        />
      </Label>
      <FlexBox>
        <Label>
          Text Size:
          <br />
          <Input
            type="number"
            value={formData.textSize}
            onChange={(e) =>
              handleInputChange("textSize", parseInt(e.target.value))
            }
          />
        </Label>
        <Label>
          Padding:
          <br />
          <Input
            type="number"
            value={formData.padding}
            onChange={(e) =>
              handleInputChange("padding", parseInt(e.target.value))
            }
          />
        </Label>
      </FlexBox>
      <Label>
        Text Color:
        <br />
        <ColorInput
          value={formData.textColor}
          onChange={(value) => handleInputChange("textColor", value)}
        />
      </Label>
      <Label>
        Background Color:
        <br />
        <ColorInput
          value={formData.backgroundColor}
          onChange={(value) => handleInputChange("backgroundColor", value)}
        />
      </Label>
      <FlexBox>
        <Label>
          Corner Radius:
          <br />
          <Input
            type="number"
            value={formData.cornerRadius}
            onChange={(e) =>
              handleInputChange("cornerRadius", parseInt(e.target.value))
            }
          />
        </Label>
        <Label>
          Tooltip Width:
          <br />
          <Input
            type="number"
            value={formData.tooltipWidth}
            onChange={(e) =>
              handleInputChange("tooltipWidth", parseInt(e.target.value))
            }
            placeholder="Auto"
          />
        </Label>
      </FlexBox>
      <Label>
        Arrow Size:
        <br />
        <Input
          type="number"
          value={formData.arrowSize}
          onChange={(e) =>
            handleInputChange("arrowSize", parseInt(e.target.value))
          }
        />
      </Label>
    </FormContainer>
  );
};

export default TooltipForm;
