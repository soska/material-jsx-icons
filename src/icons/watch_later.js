/* watch_later icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M23.98 4C12.94 4 4 12.96 4 24s8.94 20 19.98 20C35.04 44 44 35.04 44 24S35.04 4 23.98 4zm8.52 28.3L22 26V14h3v10.5l9 5.34-1.5 2.46z" />
  </svg>
);
Icon.displayName = "WatchLaterIcon";
Icon.isMaterialIcon = true;
export default Icon;
