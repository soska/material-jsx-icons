/* slideshow icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M20 16v16l10-8-10-8zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28z" />
  </svg>
);
Icon.displayName = "SlideshowIcon";
Icon.isMaterialIcon = true;
export default Icon;
