/* room icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);
Icon.displayName = "RoomIcon";
Icon.isMaterialIcon = true;
export default Icon;
