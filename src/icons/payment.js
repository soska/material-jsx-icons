/* payment icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V24h32v12zm0-20H8v-4h32v4z" />
  </svg>
);
Icon.displayName = "PaymentIcon";
Icon.isMaterialIcon = true;
export default Icon;
