/* do_not_disturb_on icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm10 22H14v-4h20v4z" />
  </svg>
);
Icon.displayName = "DoNotDisturbOnIcon";
Icon.isMaterialIcon = true;
export default Icon;
