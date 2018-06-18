/* border_outer icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M26 14h-4v4h4v-4zm0 8h-4v4h4v-4zm8 0h-4v4h4v-4zM6 6v36h36V6H6zm32 32H10V10h28v28zm-12-8h-4v4h4v-4zm-8-8h-4v4h4v-4z" />
  </svg>
);
Icon.displayName = "BorderOuterIcon";
Icon.isMaterialIcon = true;
export default Icon;
