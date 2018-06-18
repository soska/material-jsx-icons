/* short_text icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 18h32v4H8zm0 8h20v4H8z" />
  </svg>
);
Icon.displayName = "ShortTextIcon";
Icon.isMaterialIcon = true;
export default Icon;
