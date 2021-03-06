/* rss_feed icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="12.36" cy="35.64" r="4.36" />
    <path d="M8 8.89v5.66c14.06 0 25.46 11.4 25.46 25.46h5.66C39.11 22.82 25.18 8.89 8 8.89zM8 20.2v5.66c7.81 0 14.14 6.34 14.14 14.14h5.66c0-10.93-8.87-19.8-19.8-19.8z" />
  </svg>
);
Icon.displayName = "RssFeedIcon";
Icon.isMaterialIcon = true;
export default Icon;
