/* add icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" />
  </svg>
);
Icon.displayName = "AddIcon";
Icon.isMaterialIcon = true;
export default Icon;
