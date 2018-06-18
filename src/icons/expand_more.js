/* expand_more icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z" />
  </svg>
);
Icon.displayName = "ExpandMoreIcon";
Icon.isMaterialIcon = true;
export default Icon;
