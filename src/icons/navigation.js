/* navigation icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 4L9 40.59 10.41 42 24 36l13.59 6L39 40.59z" />
  </svg>
);
Icon.displayName = "NavigationIcon";
Icon.isMaterialIcon = true;
export default Icon;
