/* format_paint icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 8V6c0-1.1-.9-2-2-2H10c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2h2v8H18v22c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V24h16V8h-6z" />
  </svg>
);
Icon.displayName = "FormatPaintIcon";
Icon.isMaterialIcon = true;
export default Icon;
