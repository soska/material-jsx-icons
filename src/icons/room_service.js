/* room_service icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M4 34h40v4H4zm23.67-18.42c.21-.48.33-1.02.33-1.58 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .56.12 1.1.33 1.58C12.5 17.2 6.54 23.86 6 32h36c-.54-8.14-6.5-14.8-14.33-16.42z" />
  </svg>
);
Icon.displayName = "RoomServiceIcon";
Icon.isMaterialIcon = true;
export default Icon;
