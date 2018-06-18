/* tablet_android icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 0H12C8.68 0 6 2.68 6 6v36c0 3.32 2.68 6 6 6h24c3.32 0 6-2.68 6-6V6c0-3.32-2.68-6-6-6zm-8 44h-8v-2h8v2zm10.5-6h-29V6h29v32z" />
  </svg>
);
Icon.displayName = "TabletAndroidIcon";
Icon.isMaterialIcon = true;
export default Icon;
