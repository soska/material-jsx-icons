/* add_location icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 4c-7.72 0-14 6.28-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.72-6.28-14-14-14zm8 16h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z" />
  </svg>
);
Icon.displayName = "AddLocationIcon";
Icon.isMaterialIcon = true;
export default Icon;
