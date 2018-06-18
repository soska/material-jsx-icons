/* send icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z" />
  </svg>
);
Icon.displayName = "SendIcon";
Icon.isMaterialIcon = true;
export default Icon;
