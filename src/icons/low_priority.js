/* low_priority icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M28 10h16v4H28zm0 11h16v4H28zm0 11h16v4H28zM4 23c0 7.17 5.83 13 13 13h1v4l6-6-6-6v4h-1c-4.96 0-9-4.04-9-9s4.04-9 9-9h7v-4h-7C9.83 10 4 15.83 4 23z" />
  </svg>
);
Icon.displayName = "LowPriorityIcon";
Icon.isMaterialIcon = true;
export default Icon;
