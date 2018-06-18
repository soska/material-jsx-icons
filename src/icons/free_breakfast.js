/* free_breakfast icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 6H8v20c0 4.42 3.58 8 8 8h12c4.42 0 8-3.58 8-8v-6h4c2.21 0 4-1.79 4-4v-6c0-2.21-1.79-4-4-4zm0 10h-4v-6h4v6zM8 38h32v4H8z" />
  </svg>
);
Icon.displayName = "FreeBreakfastIcon";
Icon.isMaterialIcon = true;
export default Icon;
