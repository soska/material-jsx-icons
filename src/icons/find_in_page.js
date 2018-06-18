/* find_in_page icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 39.17V16L28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c.89 0 1.71-.3 2.37-.8l-8.87-8.87C27.93 35.38 26.04 36 24 36c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10c0 2.04-.62 3.93-1.66 5.51L40 39.17zM18 26c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6z" />
  </svg>
);
Icon.displayName = "FindInPageIcon";
Icon.isMaterialIcon = true;
export default Icon;
