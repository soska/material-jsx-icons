/* forward icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 16V8l16 16-16 16v-8H8V16z" />
  </svg>
);
Icon.displayName = "ForwardIcon";
Icon.isMaterialIcon = true;
export default Icon;
