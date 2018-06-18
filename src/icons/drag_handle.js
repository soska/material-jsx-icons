/* drag_handle icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 18H8v4h32v-4zM8 30h32v-4H8v4z" />
  </svg>
);
Icon.displayName = "DragHandleIcon";
Icon.isMaterialIcon = true;
export default Icon;
