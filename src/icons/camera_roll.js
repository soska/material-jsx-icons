/* camera_roll icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M28 10c0-2.21-1.79-4-4-4h-2V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2H8c-2.21 0-4 1.79-4 4v30c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4h16V10H28zm-4 26h-4v-4h4v4zm0-18h-4v-4h4v4zm8 18h-4v-4h4v4zm0-18h-4v-4h4v4zm8 18h-4v-4h4v4zm0-18h-4v-4h4v4z" />
  </svg>
);
Icon.displayName = "CameraRollIcon";
Icon.isMaterialIcon = true;
export default Icon;
