/* streetview icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M25.12 28.66C24.44 29.21 24 30.05 24 31v11h14c2.2 0 4-1.8 4-4V26.05c-1.89-.67-3.91-1.05-6-1.05-4.05 0-7.87 1.4-10.88 3.66z" />
    <circle cx="36" cy="12" r="10" />
    <path d="M23 12c0-2.17.54-4.2 1.47-6H10c-2.2 0-4 1.8-4 4v28c0 1.1.45 2.1 1.18 2.83L26.81 21.2C24.46 18.84 23 15.59 23 12z" />
  </svg>
);
Icon.displayName = "StreetviewIcon";
Icon.isMaterialIcon = true;
export default Icon;
