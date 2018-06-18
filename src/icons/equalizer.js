/* equalizer icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 40h8V8h-8v32zM8 40h8V24H8v16zm24-22v22h8V18h-8z" />
  </svg>
);
Icon.displayName = "EqualizerIcon";
Icon.isMaterialIcon = true;
export default Icon;
