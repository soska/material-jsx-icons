/* scanner icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M16 34h22v4H16z" fill="#fff" />
    <path d="M39.52 20.3L8.37 9 7 12.76 35.26 23H10c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24c0-1.67-1.03-3.1-2.48-3.7zM14 33h-4v-4h4v4zm24 0H18v-4h20v4z" />
  </svg>
);
Icon.displayName = "ScannerIcon";
Icon.isMaterialIcon = true;
export default Icon;
