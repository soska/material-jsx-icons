/* skip_previous icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M12 12h4v24h-4zm7 12l17 12V12z" />
  </svg>
);
Icon.displayName = "SkipPreviousIcon";
Icon.isMaterialIcon = true;
export default Icon;
