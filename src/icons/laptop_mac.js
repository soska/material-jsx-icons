/* laptop_mac icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 36c2.21 0 3.98-1.79 3.98-4L44 10c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v22c0 2.21 1.79 4 4 4H0c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4h-8zM8 10h32v22H8V10zm16 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);
Icon.displayName = "LaptopMacIcon";
Icon.isMaterialIcon = true;
export default Icon;
