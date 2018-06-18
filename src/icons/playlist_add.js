/* playlist_add icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M28 20H4v4h24v-4zm0-8H4v4h24v-4zm8 16v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM4 32h16v-4H4v4z" />
  </svg>
);
Icon.displayName = "PlaylistAddIcon";
Icon.isMaterialIcon = true;
export default Icon;
