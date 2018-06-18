/* code icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M18.8 33.2L9.7 24l9.2-9.2L16 12 4 24l12 12 2.8-2.8zm10.4 0l9.2-9.2-9.2-9.2L32 12l12 12-12 12-2.8-2.8z" />
  </svg>
);
Icon.displayName = "CodeIcon";
Icon.isMaterialIcon = true;
export default Icon;
