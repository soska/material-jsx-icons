/* bookmark icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4z" />
  </svg>
);
Icon.displayName = "BookmarkIcon";
Icon.isMaterialIcon = true;
export default Icon;
