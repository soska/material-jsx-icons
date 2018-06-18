/* arrow_downward icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z"
      fill="#010101"
    />
  </svg>
);
Icon.displayName = "ArrowDownwardIcon";
Icon.isMaterialIcon = true;
export default Icon;
