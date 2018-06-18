/* local_airport icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z" />
  </svg>
);
Icon.displayName = "LocalAirportIcon";
Icon.isMaterialIcon = true;
export default Icon;
