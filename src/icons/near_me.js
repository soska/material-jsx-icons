/* near_me icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 6L6 21.07v1.97l13.67 5.3L24.97 42h1.97L42 6z" />
  </svg>
);
Icon.displayName = "NearMeIcon";
Icon.isMaterialIcon = true;
export default Icon;
