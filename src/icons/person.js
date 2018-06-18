/* person icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm0 4c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z" />
  </svg>
);
Icon.displayName = "PersonIcon";
Icon.isMaterialIcon = true;
export default Icon;
