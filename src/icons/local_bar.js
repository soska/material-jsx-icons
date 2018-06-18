/* local_bar icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 10V6H6v4l16 18v10H12v4h24v-4H26V28l16-18zm-27.13 4l-3.56-4h25.38l-3.56 4H14.87z" />
  </svg>
);
Icon.displayName = "LocalBarIcon";
Icon.isMaterialIcon = true;
export default Icon;
