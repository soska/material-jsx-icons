/* warning icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z" />
  </svg>
);
Icon.displayName = "WarningIcon";
Icon.isMaterialIcon = true;
export default Icon;
