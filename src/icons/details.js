/* details icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 8l18 32L42 8H6zm6.75 4h22.5L24 32 12.75 12z" />
  </svg>
);
Icon.displayName = "DetailsIcon";
Icon.isMaterialIcon = true;
export default Icon;
