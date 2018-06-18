/* pause icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z" />
  </svg>
);
Icon.displayName = "PauseIcon";
Icon.isMaterialIcon = true;
export default Icon;
