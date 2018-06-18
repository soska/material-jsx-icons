/* arrow_upward icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z" />
  </svg>
);
Icon.displayName = "ArrowUpwardIcon";
Icon.isMaterialIcon = true;
export default Icon;
