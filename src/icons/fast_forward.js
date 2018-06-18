/* fast_forward icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 36l17-12L8 12v24zm18-24v24l17-12-17-12z" />
  </svg>
);
Icon.displayName = "FastForwardIcon";
Icon.isMaterialIcon = true;
export default Icon;
