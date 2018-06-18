/* priority_high icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="38" r="4" />
    <path d="M20 6h8v24h-8z" />
  </svg>
);
Icon.displayName = "PriorityHighIcon";
Icon.isMaterialIcon = true;
export default Icon;
