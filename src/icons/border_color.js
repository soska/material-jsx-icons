/* border_color icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M35.5 14L28 6.5l-20 20V34h7.5l20-20zm5.91-5.91c.78-.78.78-2.05 0-2.83L36.74.59c-.78-.78-2.05-.78-2.83 0L30 4.5l7.5 7.5 3.91-3.91z" />
    <path d="M0 40h48v8H0z" fillOpacity=".36" />
  </svg>
);
Icon.displayName = "BorderColorIcon";
Icon.isMaterialIcon = true;
export default Icon;
