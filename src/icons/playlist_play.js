/* playlist_play icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="-12 -12 48 48" {...props}>
    <path d="M26 6H-8v4h34V6zm0-8H-8v4h34v-4zM-8 18h26v-4H-8v4zm30-4v12l10-6-10-6z" />
  </svg>
);
Icon.displayName = "PlaylistPlayIcon";
Icon.isMaterialIcon = true;
export default Icon;
