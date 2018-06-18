/* line_style icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 32h10v-4H6v4zm13 0h10v-4H19v4zm13 0h10v-4H32v4zM6 40h4v-4H6v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zM6 24h16v-4H6v4zm20 0h16v-4H26v4zM6 8v8h36V8H6z" />
  </svg>
);
Icon.displayName = "LineStyleIcon";
Icon.isMaterialIcon = true;
export default Icon;
