/* terrain icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M28 12l-7.5 10 5.7 7.6L23 32c-3.38-4.5-9-12-9-12L2 36h44L28 12z" />
  </svg>
);
Icon.displayName = "TerrainIcon";
Icon.isMaterialIcon = true;
export default Icon;
