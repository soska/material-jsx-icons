/* wrap_text icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 38h12v-4H8v4zm32-28H8v4h32v-4zm-6 12H8v4h26.5c2.21 0 4 1.79 4 4s-1.79 4-4 4H30v-4l-6 6 6 6v-4h4c4.41 0 8-3.59 8-8s-3.59-8-8-8z" />
  </svg>
);
Icon.displayName = "WrapTextIcon";
Icon.isMaterialIcon = true;
export default Icon;
