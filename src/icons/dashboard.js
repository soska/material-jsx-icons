/* dashboard icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z" />
  </svg>
);
Icon.displayName = "DashboardIcon";
Icon.isMaterialIcon = true;
export default Icon;
