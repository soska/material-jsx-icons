/* pie_chart icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M22 4v40C11.86 42.99 4 34.42 4 24S11.86 5 22 4zm4.06 0v17.99H44C43.06 12.49 35.53 4.94 26.06 4zm0 22.01V44c9.47-.94 17-8.49 17.94-17.99H26.06z" />
  </svg>
);
Icon.displayName = "PieChartIcon";
Icon.isMaterialIcon = true;
export default Icon;
