/* crop_square icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z" />
  </svg>
);
Icon.displayName = "CropSquareIcon";
Icon.isMaterialIcon = true;
export default Icon;
