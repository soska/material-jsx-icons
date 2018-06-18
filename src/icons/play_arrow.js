/* play_arrow icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M16 10v28l22-14z" />
  </svg>
);
Icon.displayName = "PlayArrowIcon";
Icon.isMaterialIcon = true;
export default Icon;
