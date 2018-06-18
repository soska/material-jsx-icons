/* space_bar icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 18v8H12v-8H8v12h32V18z" />
  </svg>
);
Icon.displayName = "SpaceBarIcon";
Icon.isMaterialIcon = true;
export default Icon;
