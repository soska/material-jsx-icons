/* view_array icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 36h6V10H8v26zm28-26v26h6V10h-6zM16 36h18V10H16v26z" />
  </svg>
);
Icon.displayName = "ViewArrayIcon";
Icon.isMaterialIcon = true;
export default Icon;
