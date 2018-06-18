/* video_library icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 29V11l12 9-12 9z" />
  </svg>
);
Icon.displayName = "VideoLibraryIcon";
Icon.isMaterialIcon = true;
export default Icon;
