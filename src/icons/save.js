/* save icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M34 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14l-8-8zM24 38c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm6-20H10v-8h20v8z" />
  </svg>
);
Icon.displayName = "SaveIcon";
Icon.isMaterialIcon = true;
export default Icon;
