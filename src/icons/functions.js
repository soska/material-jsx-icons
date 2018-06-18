/* functions icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 8H12v4l13 12-13 12v4h24v-6H22l10-10-10-10h14z" />
  </svg>
);
Icon.displayName = "FunctionsIcon";
Icon.isMaterialIcon = true;
export default Icon;
