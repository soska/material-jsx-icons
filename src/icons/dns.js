/* dns icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 26H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zM14 38c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM40 6H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM14 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);
Icon.displayName = "DnsIcon";
Icon.isMaterialIcon = true;
export default Icon;
