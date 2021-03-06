/* hourglass_empty icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M12 5v10l9 9-9 9v10h24V33l-9-9 9-9V5H12zm20 29v5H16v-5l8-8 8 8zm-8-12l-8-8V9h16v5l-8 8z" />
  </svg>
);
Icon.displayName = "HourglassEmptyIcon";
Icon.isMaterialIcon = true;
export default Icon;
