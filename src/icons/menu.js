/* menu icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
  </svg>
);
Icon.displayName = "MenuIcon";
Icon.isMaterialIcon = true;
export default Icon;
