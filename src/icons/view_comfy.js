/* view_comfy icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M6 18h8v-8H6v8zm0 10h8v-8H6v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zM16 18h8v-8h-8v8zm10-8v8h8v-8h-8zm10 18h8v-8h-8v8zM6 38h8v-8H6v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zm0-28v8h8v-8h-8z" />
  </svg>
);
Icon.displayName = "ViewComfyIcon";
Icon.isMaterialIcon = true;
export default Icon;
