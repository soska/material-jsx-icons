/* school icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M10 26.36v8L24 42l14-7.64v-8L24 34l-14-7.64zM24 6L2 18l22 12 18-9.82V34h4V18L24 6z" />
  </svg>
);
Icon.displayName = "SchoolIcon";
Icon.isMaterialIcon = true;
export default Icon;
