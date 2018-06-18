/* publish icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M10 8v4h28V8H10zm0 20h8v12h12V28h8L24 14 10 28z" />
  </svg>
);
Icon.displayName = "PublishIcon";
Icon.isMaterialIcon = true;
export default Icon;
