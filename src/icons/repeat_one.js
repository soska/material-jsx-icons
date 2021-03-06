/* repeat_one icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8zm-8-4V18h-2l-4 2v2h3v8h3z" />
  </svg>
);
Icon.displayName = "RepeatOneIcon";
Icon.isMaterialIcon = true;
export default Icon;
