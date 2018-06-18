/* photo_filter icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38.04 20v18H10V10h18V6H10.04c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V20h-4zM34 20l1.88-4.12L40 14l-4.12-1.88L34 8l-1.88 4.12L28 14l4.12 1.88zm-7.5 1.5L24 16l-2.5 5.5L16 24l5.5 2.5L24 32l2.5-5.5L32 24z" />
  </svg>
);
Icon.displayName = "PhotoFilterIcon";
Icon.isMaterialIcon = true;
export default Icon;
