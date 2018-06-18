/* clear icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
  </svg>
);
Icon.displayName = "ClearIcon";
Icon.isMaterialIcon = true;
export default Icon;
