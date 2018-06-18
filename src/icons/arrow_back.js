/* arrow_back icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
  </svg>
);
Icon.displayName = "ArrowBackIcon";
Icon.isMaterialIcon = true;
export default Icon;
