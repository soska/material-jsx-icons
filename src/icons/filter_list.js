/* filter_list icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 36h8v-4h-8v4zM6 12v4h36v-4H6zm6 14h24v-4H12v4z" />
  </svg>
);
Icon.displayName = "FilterListIcon";
Icon.isMaterialIcon = true;
export default Icon;
