/* arrow_drop_down_circle icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 24l-8-8h16l-8 8z" />
  </svg>
);
Icon.displayName = "ArrowDropDownCircleIcon";
Icon.isMaterialIcon = true;
export default Icon;
