/* tab icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H6V10h20v8h16v20z" />
  </svg>
);
Icon.displayName = "TabIcon";
Icon.isMaterialIcon = true;
export default Icon;
