/* toys icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 24c0-6.1 4.9-11 11-11s11 4.9 11 11H24zm0 0c0 6.1-4.9 11-11 11S2 30.1 2 24h22zm0 0c-6.1 0-11-4.9-11-11S17.9 2 24 2v22zm0 0c6.1 0 11 4.9 11 11s-4.9 11-11 11V24z" />
  </svg>
);
Icon.displayName = "ToysIcon";
Icon.isMaterialIcon = true;
export default Icon;
