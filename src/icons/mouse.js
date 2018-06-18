/* mouse icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M26 2.14V18h14c0-8.16-6.11-14.88-14-15.86zM8 30c0 8.84 7.16 16 16 16s16-7.16 16-16v-8H8v8zM22 2.14C14.11 3.12 8 9.84 8 18h14V2.14z" />
  </svg>
);
Icon.displayName = "MouseIcon";
Icon.isMaterialIcon = true;
export default Icon;
