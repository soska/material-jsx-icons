/* view_headline icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 30h34v-4H8v4zm0 8h34v-4H8v4zm0-16h34v-4H8v4zm0-12v4h34v-4H8z" />
  </svg>
);
Icon.displayName = "ViewHeadlineIcon";
Icon.isMaterialIcon = true;
export default Icon;
