/* dehaze icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M4 31v4h40v-4H4zm0-10v4h40v-4H4zm0-10v4h40v-4H4z" />
  </svg>
);
Icon.displayName = "DehazeIcon";
Icon.isMaterialIcon = true;
export default Icon;
