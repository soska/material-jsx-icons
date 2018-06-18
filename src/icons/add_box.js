/* add_box icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-4 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z" />
  </svg>
);
Icon.displayName = "AddBoxIcon";
Icon.isMaterialIcon = true;
export default Icon;
