/* ac_unit icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M44 22h-8.34l6.48-6.49-2.83-2.82L30 22h-4v-4l9.31-9.31-2.82-2.83L26 12.34V4h-4v8.34l-6.49-6.48-2.82 2.83L22 18v4h-4l-9.31-9.31-2.83 2.82L12.34 22H4v4h8.34l-6.48 6.49 2.83 2.82L18 26h4v4l-9.31 9.31 2.82 2.83L22 35.66V44h4v-8.34l6.49 6.48 2.82-2.83L26 30v-4h4l9.31 9.31 2.83-2.82L35.66 26H44z" />
  </svg>
);
Icon.displayName = "AcUnitIcon";
Icon.isMaterialIcon = true;
export default Icon;
