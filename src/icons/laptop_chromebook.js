/* laptop_chromebook icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M44 36V6H4v30H0v4h48v-4h-4zm-16 0h-8v-2h8v2zm12-6H8V10h32v20z" />
  </svg>
);
Icon.displayName = "LaptopChromebookIcon";
Icon.isMaterialIcon = true;
export default Icon;
