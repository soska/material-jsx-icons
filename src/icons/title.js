/* title icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M10 8v6h11v24h6V14h11V8z" />
  </svg>
);
Icon.displayName = "TitleIcon";
Icon.isMaterialIcon = true;
export default Icon;
