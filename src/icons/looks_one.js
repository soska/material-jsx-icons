/* looks_one icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM28 34h-4V18h-4v-4h8v20z" />
  </svg>
);
Icon.displayName = "LooksOneIcon";
Icon.isMaterialIcon = true;
export default Icon;
