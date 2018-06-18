/* beenhere icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 2H10C7.79 2 6.02 3.79 6.02 6L6 31.87c0 1.38.7 2.6 1.76 3.32L23.99 46l16.23-10.81c1.06-.72 1.76-1.94 1.76-3.32L42 6c0-2.21-1.79-4-4-4zM20 32L10 22l2.83-2.83L20 26.34l15.17-15.17L38 14 20 32z" />
  </svg>
);
Icon.displayName = "BeenhereIcon";
Icon.isMaterialIcon = true;
export default Icon;
