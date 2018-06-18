/* looks icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 20c-7.72 0-14 6.28-14 14h4c0-5.51 4.49-10 10-10s10 4.49 10 10h4c0-7.72-6.28-14-14-14zm0-8C11.87 12 2 21.87 2 34h4c0-9.92 8.08-18 18-18s18 8.08 18 18h4c0-12.13-9.87-22-22-22z" />
  </svg>
);
Icon.displayName = "LooksIcon";
Icon.isMaterialIcon = true;
export default Icon;
