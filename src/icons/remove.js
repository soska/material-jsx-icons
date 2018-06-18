/* remove icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 26H10v-4h28v4z" />
  </svg>
);
Icon.displayName = "RemoveIcon";
Icon.isMaterialIcon = true;
export default Icon;
