/* clear_all icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M10 26h28v-4H10v4zm-4 8h28v-4H6v4zm8-20v4h28v-4H14z" />
  </svg>
);
Icon.displayName = "ClearAllIcon";
Icon.isMaterialIcon = true;
export default Icon;
