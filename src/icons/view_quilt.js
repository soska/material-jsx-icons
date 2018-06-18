/* view_quilt icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 36h10V24H20v12zM8 36h10V10H8v26zm24 0h10V24H32v12zM20 10v12h22V10H20z" />
  </svg>
);
Icon.displayName = "ViewQuiltIcon";
Icon.isMaterialIcon = true;
export default Icon;
