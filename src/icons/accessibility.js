/* accessibility icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm18 14H30v26h-4V32h-4v12h-4V18H6v-4h36v4z" />
  </svg>
);
Icon.displayName = "AccessibilityIcon";
Icon.isMaterialIcon = true;
export default Icon;
