/* network_cell icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M4 44h40V4z" fillOpacity=".3" />
    <path d="M34 14L4 44h30z" />
  </svg>
);
Icon.displayName = "NetworkCellIcon";
Icon.isMaterialIcon = true;
export default Icon;
