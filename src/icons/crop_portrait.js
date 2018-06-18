/* crop_portrait icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M34 6H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H14V10h20v28z" />
  </svg>
);
Icon.displayName = "CropPortraitIcon";
Icon.isMaterialIcon = true;
export default Icon;
