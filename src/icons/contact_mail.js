/* contact_mail icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 16v-2l-6 4-6-4v2l6 4 6-4zm2-10H4c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h40c2.21 0 3.98-1.79 3.98-4L48 10c0-2.21-1.79-4-4-4zm-28 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm12 24H4v-2c0-4 8-6.2 12-6.2S28 30 28 34v2zm16-12H28V12h16v12z" />
  </svg>
);
Icon.displayName = "ContactMailIcon";
Icon.isMaterialIcon = true;
export default Icon;
