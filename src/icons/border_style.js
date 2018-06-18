/* border_style icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M30 42h4v-4h-4v4zm8 0h4v-4h-4v4zm-24 0h4v-4h-4v4zm8 0h4v-4h-4v4zm16-8h4v-4h-4v4zm0-8h4v-4h-4v4zM6 6v36h4V10h32V6H6zm32 12h4v-4h-4v4z" />
  </svg>
);
Icon.displayName = "BorderStyleIcon";
Icon.isMaterialIcon = true;
export default Icon;
