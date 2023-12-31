import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;

  flex-direction: ${(props) =>
    props.verticalposition === "top" ? "column-reverse" : "column"};

  align-items: ${(props) => props.horizontalposition || "center"};
`;

const TooltipContent = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: visibility 0.2s, opacity 0.2s;

  flex-direction: ${(props) => {
    switch (props.imageposition) {
      case "Left":
        return "row";
      case "Right":
        return "row-reverse";
      case "Top":
        return "column";
      case "Bottom":
        return "column-reverse";
      default:
        return "row"; 
    }
  }};

  font-size: ${(props) => props.textsize || "14px"};

  background-color: ${(props) => props.bgcolor || "lightgray"};
  color: ${(props) => props.textcolor || "black"};

  padding: ${(props) => props.padding || "8px"};
  border-radius: ${(props) => props.cornerradius || "4px"};

  width: ${(props) =>
    props.tooltipwidth ? props.tooltipwidth + "px" : "max-content"};
  max-width: 380px;

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};

  top: ${(props) =>
    props.verticalposition === "top"
      ? "auto"
      : `calc(100% + ${props.arrowheight || "8px"})`};
  bottom: ${(props) =>
    props.verticalposition === "bottom"
      ? "auto"
      : `calc(100% + ${props.arrowheight || "8px"})`};

  left: ${(props) => (props.horizontalposition === "start" ? "1px" : "auto")};
  right: ${(props) => (props.horizontalposition === "end" ? "1px" : "auto")};

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: transparent;

    border-width: ${(props) => props.arrowheight || "8px"};
    border-bottom-color: ${(props) => props.bgcolor || "lightgray"};

    left: ${(props) =>
      props.horizontalposition === "start"
        ? "10px"
        : props.horizontalposition === "end"
        ? "auto"
        : "50%"};
    right: ${(props) => (props.horizontalposition === "end" ? "10px" : "auto")};

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

const Img = styled.img`
  max-width: 300px;
  max-height: 100px;
  margin-right: 5px;
`;

const P = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tooltip = ({
  text,
  textsize,
  children,
  bgcolor,
  textcolor,
  padding,
  cornerradius,
  tooltipwidth,
  arrowheight,
  horizontalposition,
  verticalposition,
  alwaysvisible,
  imageFile,
  imageposition,
}) => {
  const [showTooltip, setShowTooltip] = useState(alwaysvisible);

  useEffect(() => {
    setShowTooltip(alwaysvisible);
  }, [alwaysvisible]);

  return (
    <TooltipWrapper
      horizontalposition={horizontalposition}
      verticalposition={verticalposition}
    >
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(alwaysvisible)}
      >
        {children}
      </div>

      <TooltipContent
        textsize={textsize}
        show={showTooltip}
        bgcolor={bgcolor}
        textcolor={textcolor}
        padding={padding}
        cornerradius={cornerradius}
        tooltipwidth={tooltipwidth}
        arrowheight={arrowheight}
        horizontalposition={horizontalposition}
        verticalposition={verticalposition}
        alwaysvisible={alwaysvisible}
        imageposition={imageposition}
      >
        {imageFile && (
          <Img src={URL.createObjectURL(imageFile)} alt="Tooltip Image" />
        )}
        <P>{text}</P>
      </TooltipContent>
    </TooltipWrapper>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  textsize: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
  padding: PropTypes.string,
  cornerradius: PropTypes.string,
  tooltipwidth: PropTypes.string,
  arrowheight: PropTypes.string,
  horizontalposition: PropTypes.oneOf(["start", "center", "end"]),
  verticalposition: PropTypes.oneOf(["top", "bottom"]),
  alwaysvisible: PropTypes.bool,
  imageFile: PropTypes.object,
  imageposition: PropTypes.oneOf(["Left", "Right", "Top", "Bottom"]),
};

export default Tooltip;
