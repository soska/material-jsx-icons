/* border_all icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 6v36h36V6H6zm16 32H10V26h12v12zm0-16H10V10h12v12zm16 16H26V26h12v12zm0-16H26V10h12v12z" />
  </svg>
);
Icon.displayName = "BorderAllIcon";
Icon.isMaterialIcon = true;
export default Icon;
