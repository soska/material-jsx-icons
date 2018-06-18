/* view_compact icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 38h12V24H6v14zm14 0h24V24H20v14zM6 10v12h38V10H6z" />
  </svg>
);
Icon.displayName = "ViewCompactIcon";
Icon.isMaterialIcon = true;
export default Icon;
