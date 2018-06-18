/* stop icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M12 12h24v24H12z" />
  </svg>
);
Icon.displayName = "StopIcon";
Icon.isMaterialIcon = true;
export default Icon;
