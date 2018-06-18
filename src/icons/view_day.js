/* view_day icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M4 42h38v-6H4v6zm36-26H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zM4 6v6h38V6H4z" />
  </svg>
);
Icon.displayName = "ViewDayIcon";
Icon.isMaterialIcon = true;
export default Icon;
