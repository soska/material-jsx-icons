/* reply icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 18v-8L6 24l14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z" />
  </svg>
);
Icon.displayName = "ReplyIcon";
Icon.isMaterialIcon = true;
export default Icon;
