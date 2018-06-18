/* subject icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M28 34H8v4h20v-4zm12-16H8v4h32v-4zM8 30h32v-4H8v4zm0-20v4h32v-4H8z" />
  </svg>
);
Icon.displayName = "SubjectIcon";
Icon.isMaterialIcon = true;
export default Icon;
