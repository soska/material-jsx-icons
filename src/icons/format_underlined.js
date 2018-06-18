/* format_underlined icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 34c6.63 0 12-5.37 12-12V6h-5v16c0 3.87-3.13 7-7 7s-7-3.13-7-7V6h-5v16c0 6.63 5.37 12 12 12zm-14 4v4h28v-4H10z" />
  </svg>
);
Icon.displayName = "FormatUnderlinedIcon";
Icon.isMaterialIcon = true;
export default Icon;
