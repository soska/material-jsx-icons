/* book icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8z" />
  </svg>
);
Icon.displayName = "BookIcon";
Icon.isMaterialIcon = true;
export default Icon;
