/* aspect_ratio icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 24h-4v6h-6v4h10V24zm-24-6h6v-4H10v10h4v-6zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z" />
  </svg>
);
Icon.displayName = "AspectRatioIcon";
Icon.isMaterialIcon = true;
export default Icon;
