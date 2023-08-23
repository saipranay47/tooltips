## Tooltip Component

This project is a React component that provides a customizable tooltip for displaying additional information on hover.


Props
-----

The following props can be passed into the Tooltip component:

-   `text` (string, required): The text to display in the tooltip
-   `textsize` (string): The font size of the text in the tooltip
-   `children` (node, required): The child element that the tooltip will be attached to
-   `bgcolor` (string): The background color of the tooltip
-   `textcolor` (string): The color of the text in the tooltip
-   `padding` (string): The padding around the tooltip content
-   `cornerradius` (string): The corner radius of the tooltip
-   `tooltipwidth` (string): The width of the tooltip
-   `arrowheight` (string): The height of the arrow on the tooltip
-   `horizontalposition` (string): The horizontal position of the tooltip relative to the child element (options: "start", "center", "end")
-   `verticalposition` (string): The vertical position of the tooltip relative to the child element (options: "top", "bottom")
-   `alwaysvisible` (bool): Whether the tooltip should always be visible
-   `imageFile` (object): An image to display in the tooltip
-   `imageposition` (string): The position of the image relative to the text (options: "Left", "Right", "Top", "Bottom")

The default prop values stored in context are used as the initial values for the props when the component is first rendered. These values can be overridden by passing in new props when the component is used.