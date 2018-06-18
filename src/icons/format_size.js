/* format_size icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M18 8v6h10v24h6V14h10V8H18zM6 24h6v14h6V24h6v-6H6v6z" />
  </svg>
);
Icon.displayName = "FormatSizeIcon";
Icon.isMaterialIcon = true;
export default Icon;
