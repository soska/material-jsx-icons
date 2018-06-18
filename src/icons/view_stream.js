/* view_stream icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 36h34V24H8v12zm0-26v12h34V10H8z" />
  </svg>
);
Icon.displayName = "ViewStreamIcon";
Icon.isMaterialIcon = true;
export default Icon;
