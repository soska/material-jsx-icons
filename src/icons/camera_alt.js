/* camera_alt icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="24" r="6.4" />
    <path d="M18 4l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4h-6.34L30 4H18zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" />
  </svg>
);
Icon.displayName = "CameraAltIcon";
Icon.isMaterialIcon = true;
export default Icon;
