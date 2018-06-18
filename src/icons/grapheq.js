/* grapheq icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 36h4V12h-4v24zm8 8h4V4h-4v40zM6 28h4v-8H6v8zm24 8h4V12h-4v24zm8-16v8h4v-8h-4z" />
  </svg>
);
Icon.displayName = "GrapheqIcon";
Icon.isMaterialIcon = true;
export default Icon;
