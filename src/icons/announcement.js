/* announcement icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM26 22h-4V10h4v12zm0 8h-4v-4h4v4z" />
  </svg>
);
Icon.displayName = "AnnouncementIcon";
Icon.isMaterialIcon = true;
export default Icon;
