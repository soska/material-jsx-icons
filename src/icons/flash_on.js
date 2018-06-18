/* flash_on icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 4v22h6v18l14-24h-8l8-16z" />
  </svg>
);
Icon.displayName = "FlashOnIcon";
Icon.isMaterialIcon = true;
export default Icon;
