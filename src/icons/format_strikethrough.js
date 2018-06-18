/* format_strikethrough icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 38h8v-6h-8v6zM10 8v6h10v6h8v-6h10V8H10zM6 28h36v-4H6v4z" />
  </svg>
);
Icon.displayName = "FormatStrikethroughIcon";
Icon.isMaterialIcon = true;
export default Icon;
