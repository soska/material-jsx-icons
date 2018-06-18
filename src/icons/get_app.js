/* get_app icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z" />
  </svg>
);
Icon.displayName = "GetAppIcon";
Icon.isMaterialIcon = true;
export default Icon;
