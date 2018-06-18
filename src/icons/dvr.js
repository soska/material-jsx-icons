/* dvr icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zm-4-18H16v4h22v-4zm0 8H16v4h22v-4zm-24-8h-4v4h4v-4zm0 8h-4v4h4v-4z" />
  </svg>
);
Icon.displayName = "DvrIcon";
Icon.isMaterialIcon = true;
export default Icon;
