/* home icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
  </svg>
);
Icon.displayName = "HomeIcon";
Icon.isMaterialIcon = true;
export default Icon;
