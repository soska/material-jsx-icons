/* toc icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 18h28v-4H6v4zm0 8h28v-4H6v4zm0 8h28v-4H6v4zm32 0h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4z" />
  </svg>
);
Icon.displayName = "TocIcon";
Icon.isMaterialIcon = true;
export default Icon;
