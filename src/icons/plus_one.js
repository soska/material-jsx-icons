/* plus_one icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 16h-4v8H8v4h8v8h4v-8h8v-4h-8zm9-3.84v3.64l5-1V36h4V10z" />
  </svg>
);
Icon.displayName = "PlusOneIcon";
Icon.isMaterialIcon = true;
export default Icon;
