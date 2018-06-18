/* volume_down icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z" />
  </svg>
);
Icon.displayName = "VolumeDownIcon";
Icon.isMaterialIcon = true;
export default Icon;
