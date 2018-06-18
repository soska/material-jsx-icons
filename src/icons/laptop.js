/* laptop icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4H0v4h48v-4h-8zM8 12h32v20H8V12z" />
  </svg>
);
Icon.displayName = "LaptopIcon";
Icon.isMaterialIcon = true;
export default Icon;
