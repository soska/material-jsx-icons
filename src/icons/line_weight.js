/* line_weight icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 34h36v-4H6v4zm0 6h36v-2H6v2zm0-14h36v-6H6v6zM6 8v8h36V8H6z" />
  </svg>
);
Icon.displayName = "LineWeightIcon";
Icon.isMaterialIcon = true;
export default Icon;
