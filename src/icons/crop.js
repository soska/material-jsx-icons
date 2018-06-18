/* crop icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M34 30h4V14c0-2.21-1.79-4-4-4H18v4h16v16zm-20 4V2h-4v8H2v4h8v20c0 2.21 1.79 4 4 4h20v8h4v-8h8v-4H14z" />
  </svg>
);
Icon.displayName = "CropIcon";
Icon.isMaterialIcon = true;
export default Icon;
