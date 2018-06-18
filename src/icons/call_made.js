/* call_made icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M18 10v4h13.17L8 37.17 10.83 40 34 16.83V30h4V10z" />
  </svg>
);
Icon.displayName = "CallMadeIcon";
Icon.isMaterialIcon = true;
export default Icon;
