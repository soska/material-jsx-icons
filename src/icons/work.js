/* work icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 12h-8V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H8c-2.21 0-3.98 1.79-3.98 4L4 38c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-12 0h-8V8h8v4z" />
  </svg>
);
Icon.displayName = "WorkIcon";
Icon.isMaterialIcon = true;
export default Icon;
