/* power_input icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M5 18v4h38v-4H5zm0 12h10v-4H5v4zm14 0h10v-4H19v4zm14 0h10v-4H33v4z" />
  </svg>
);
Icon.displayName = "PowerInputIcon";
Icon.isMaterialIcon = true;
export default Icon;
