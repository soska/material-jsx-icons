/* trending_flat icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M44 24l-8-8v6H6v4h30v6z" />
  </svg>
);
Icon.displayName = "TrendingFlatIcon";
Icon.isMaterialIcon = true;
export default Icon;
