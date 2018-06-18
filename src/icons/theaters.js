/* theaters icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 6v4h-4V6H16v4h-4V6H8v36h4v-4h4v4h16v-4h4v4h4V6h-4zM16 34h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4z" />
  </svg>
);
Icon.displayName = "TheatersIcon";
Icon.isMaterialIcon = true;
export default Icon;
