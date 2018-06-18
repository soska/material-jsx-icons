/* featured_play_list icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM24 22H6v-4h18v4zm0-8H6v-4h18v4z" />
  </svg>
);
Icon.displayName = "FeaturedPlayListIcon";
Icon.isMaterialIcon = true;
export default Icon;
