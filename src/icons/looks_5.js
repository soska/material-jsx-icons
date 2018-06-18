/* looks_5 icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 12h-8v4h4c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4h-8v-4h8v-4h-8V14h12v4z" />
  </svg>
);
Icon.displayName = "Looks5Icon";
Icon.isMaterialIcon = true;
export default Icon;
