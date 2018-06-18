/* repeat icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z" />
  </svg>
);
Icon.displayName = "RepeatIcon";
Icon.isMaterialIcon = true;
export default Icon;
