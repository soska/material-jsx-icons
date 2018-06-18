/* first_page icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36.82 33.18L27.64 24l9.18-9.18L34 12 22 24l12 12zM12 12h4v24h-4z" />
  </svg>
);
Icon.displayName = "FirstPageIcon";
Icon.isMaterialIcon = true;
export default Icon;
