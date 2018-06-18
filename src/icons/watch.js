/* watch icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 24c0-5.09-2.38-9.62-6.09-12.55L32 0H16l-1.91 11.45C10.38 14.38 8 18.91 8 24s2.38 9.62 6.09 12.55L16 48h16l1.91-11.45C37.62 33.62 40 29.09 40 24zm-28 0c0-6.63 5.37-12 12-12s12 5.37 12 12-5.37 12-12 12-12-5.37-12-12z" />
  </svg>
);
Icon.displayName = "WatchIcon";
Icon.isMaterialIcon = true;
export default Icon;
