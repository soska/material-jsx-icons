/* account_balance icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 20v14h6V20H8zm12 0v14h6V20h-6zM4 44h38v-6H4v6zm28-24v14h6V20h-6zM23 2L4 12v4h38v-4L23 2z" />
  </svg>
);
Icon.displayName = "AccountBalanceIcon";
Icon.isMaterialIcon = true;
export default Icon;
