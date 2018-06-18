/* trending_down icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M32 36l4.59-4.59-9.76-9.75-8 8L4 14.83 6.83 12l12 12 8-8 12.58 12.59L44 24v12z" />
  </svg>
);
Icon.displayName = "TrendingDownIcon";
Icon.isMaterialIcon = true;
export default Icon;
