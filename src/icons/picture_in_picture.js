/* picture_in_picture icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 14H22v12h16V14zm4-8H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 3.96 4 3.96h36c2.21 0 4-1.76 4-3.96V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z" />
  </svg>
);
Icon.displayName = "PictureInPictureIcon";
Icon.isMaterialIcon = true;
export default Icon;
