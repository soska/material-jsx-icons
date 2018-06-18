/* call_missed icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M39.17 14L24 29.17 12.83 18H22v-4H6v16h4v-9.17l14 14 18-18z" />
  </svg>
);
Icon.displayName = "CallMissedIcon";
Icon.isMaterialIcon = true;
export default Icon;
