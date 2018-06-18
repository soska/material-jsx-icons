/* reply_all icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 16v-6L0 24l14 14v-6l-8-8 8-8zm12 2v-8L12 24l14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z" />
  </svg>
);
Icon.displayName = "ReplyAllIcon";
Icon.isMaterialIcon = true;
export default Icon;
