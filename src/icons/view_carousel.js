/* view_carousel icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 38h20V8H14v30zM4 34h8V12H4v22zm32-22v22h8V12h-8z" />
  </svg>
);
Icon.displayName = "ViewCarouselIcon";
Icon.isMaterialIcon = true;
export default Icon;
