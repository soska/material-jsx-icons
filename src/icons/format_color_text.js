/* format_color_text icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M0 40h48v8H0z" fillOpacity=".36" />
    <path d="M22 6L11 34h4.5l2.25-6h12.5l2.25 6H37L26 6h-4zm-2.75 18L24 11.33 28.75 24h-9.5z" />
  </svg>
);
Icon.displayName = "FormatColorTextIcon";
Icon.isMaterialIcon = true;
export default Icon;
