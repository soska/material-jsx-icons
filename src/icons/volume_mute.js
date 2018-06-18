/* volume_mute icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 18v12h8l10 10V8L22 18h-8z" />
  </svg>
);
Icon.displayName = "VolumeMuteIcon";
Icon.isMaterialIcon = true;
export default Icon;
