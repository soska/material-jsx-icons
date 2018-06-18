/* arrow_forward icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 8l-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z" />
  </svg>
);
Icon.displayName = "ArrowForwardIcon";
Icon.isMaterialIcon = true;
export default Icon;
