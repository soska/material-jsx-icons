/* bubble_chart icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="14.4" cy="28.8" r="6.4" />
    <circle cx="29.6" cy="36" r="4" />
    <circle cx="30.4" cy="17.6" r="9.6" />
  </svg>
);
Icon.displayName = "BubbleChartIcon";
Icon.isMaterialIcon = true;
export default Icon;
