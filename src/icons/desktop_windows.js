/* desktop_windows icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 4H6C3.79 4 2 5.79 2 8v24c0 2.21 1.79 4 4 4h14v4h-4v4h16v-4h-4v-4h14c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H6V8h36v24z" />
  </svg>
);
Icon.displayName = "DesktopWindowsIcon";
Icon.isMaterialIcon = true;
export default Icon;
