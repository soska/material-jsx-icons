/* call_received icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 10.83L37.17 8 14 31.17V18h-4v20h20v-4H16.83z" />
  </svg>
);
Icon.displayName = "CallReceivedIcon";
Icon.isMaterialIcon = true;
export default Icon;
