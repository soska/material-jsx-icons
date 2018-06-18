/* branding_watermark icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 32H24V26h18v12z" />
  </svg>
);
Icon.displayName = "BrandingWatermarkIcon";
Icon.isMaterialIcon = true;
export default Icon;
