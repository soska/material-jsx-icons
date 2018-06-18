/* polymer icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 8h-8L14.21 33.26 9 24l9-16h-8L1 24l9 16h8l15.79-25.26L39 24l-9 16h8l9-16z" />
  </svg>
);
Icon.displayName = "PolymerIcon";
Icon.isMaterialIcon = true;
export default Icon;
