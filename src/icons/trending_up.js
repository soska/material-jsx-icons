/* trending_up icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M32 12l4.59 4.59-9.76 9.75-8-8L4 33.17 6.83 36l12-12 8 8 12.58-12.59L44 24V12z" />
  </svg>
);
Icon.displayName = "TrendingUpIcon";
Icon.isMaterialIcon = true;
export default Icon;
