/* musnote icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 6v21.11c-1.18-.69-2.54-1.11-4-1.11-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8V14h8V6H24z" />
  </svg>
);
Icon.displayName = "MusnoteIcon";
Icon.isMaterialIcon = true;
export default Icon;
