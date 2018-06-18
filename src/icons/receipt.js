/* receipt icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 34H12v-4h24v4zm0-8H12v-4h24v4zm0-8H12v-4h24v4zM6 44l3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3V4l-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3v40z" />
  </svg>
);
Icon.displayName = "ReceiptIcon";
Icon.isMaterialIcon = true;
export default Icon;
