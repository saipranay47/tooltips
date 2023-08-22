import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: ${(props) =>
    props.verticalposition === "top" ? "column-reverse" : "column"};
  justify-content: center;
  align-items: ${(props) => props.horizontalposition || "center"};
`;

const TooltipContent = styled.div`
  position: relative;
  text-align: center;
  background-color: ${(props) => props.bgcolor || "lightgray"};
  color: ${(props) => props.textcolor || "black"};
  padding: ${(props) => props.padding || "8px"};
  border-radius: ${(props) => props.cornerradius || "4px"};
  width: ${(props) => props.tooltipwidth || "max-content"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: ${(props) =>
    props.verticalposition === "top" ? "0" : props.arrowheight || "8px"};
  margin-bottom: ${(props) =>
    props.verticalposition === "bottom" ? "0" : props.arrowheight || "8px"};

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: transparent;
    border-width: ${(props) => props.arrowheight || "8px"};
    border-bottom-color: ${(props) => props.bgcolor || "lightgray"};
    left: ${(props) =>
      props.horizontalposition === "start"
        ? "20px"
        : props.horizontalposition === "end"
        ? "auto"
        : "50%"};
    right: ${(props) => (props.horizontalposition === "end" ? "20px" : "auto")};
    bottom: 100%;
    top: ${(props) => (props.verticalposition === "top" ? "100%" : "unset")};

    transform: ${(props) =>
      props.horizontalposition === "center"
        ? "translateX(-50%)" +
          (props.verticalposition === "top" ? " rotate(180deg)" : "")
        : props.verticalposition === "top"
        ? "rotate(180deg)"
        : "none"};
  }
`;

const Tooltip = ({
  text,
  children,
  bgcolor,
  textcolor,
  padding,
  cornerradius,
  tooltipwidth,
  arrowheight,
  horizontalposition,
  verticalposition,
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const tooltipStyle = {
    visibility: showTooltip ? "visible" : "hidden",
    opacity: showTooltip ? 1 : 0,
    transition: "visibility 0.2s, opacity 0.2s",
  };

  return (
    <TooltipWrapper
      horizontalposition={horizontalposition}
      verticalposition={verticalposition}
    >
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>

      <TooltipContent
        style={tooltipStyle}
        bgcolor={bgcolor}
        textcolor={textcolor}
        padding={padding}
        cornerradius={cornerradius}
        tooltipwidth={tooltipwidth}
        arrowheight={arrowheight}
        horizontalposition={horizontalposition}
        verticalposition={verticalposition}
      >
        {text}
      </TooltipContent>
    </TooltipWrapper>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
  cornerRadius: PropTypes.string,
  tooltipWidth: PropTypes.string,
  arrowHeight: PropTypes.string,
  horizontalPosition: PropTypes.oneOf(["start", "center", "end"]),
  verticalPosition: PropTypes.oneOf(["top", "bottom"]),
};

export default Tooltip;
