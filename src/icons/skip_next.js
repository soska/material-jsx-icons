/* skip_next icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z" />
  </svg>
);
Icon.displayName = "SkipNextIcon";
Icon.isMaterialIcon = true;
export default Icon;
