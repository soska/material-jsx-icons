/* card_membership icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 4H8C5.79 4 4 5.79 4 8v22c0 2.21 1.79 4 4 4h8v10l8-4 8 4V34h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 26H8v-4h32v4zm0-10H8V8h32v12z" />
  </svg>
);
Icon.displayName = "CardMembershipIcon";
Icon.isMaterialIcon = true;
export default Icon;
