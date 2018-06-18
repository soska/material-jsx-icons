/* sort icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 36h12v-4H6v4zm0-24v4h36v-4H6zm0 14h24v-4H6v4z" />
  </svg>
);
Icon.displayName = "SortIcon";
Icon.isMaterialIcon = true;
export default Icon;
