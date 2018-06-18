/* looks_4 icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 28h-4v-8h-8V14h4v8h4v-8h4v20z" />
  </svg>
);
Icon.displayName = "Looks4Icon";
Icon.isMaterialIcon = true;
export default Icon;
