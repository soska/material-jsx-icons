/* done icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z" />
  </svg>
);
Icon.displayName = "DoneIcon";
Icon.isMaterialIcon = true;
export default Icon;
