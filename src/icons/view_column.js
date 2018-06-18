/* view_column icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 36h10V10H20v26zM8 36h10V10H8v26zm24-26v26h10V10H32z" />
  </svg>
);
Icon.displayName = "ViewColumnIcon";
Icon.isMaterialIcon = true;
export default Icon;
