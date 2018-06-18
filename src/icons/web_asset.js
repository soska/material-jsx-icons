/* web_asset icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M38 8H10c-2.22 0-4 1.8-4 4v24c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.78-4-4-4zm0 28H10V16h28v20z"
      fill="#010101"
    />
  </svg>
);
Icon.displayName = "WebAssetIcon";
Icon.isMaterialIcon = true;
export default Icon;
