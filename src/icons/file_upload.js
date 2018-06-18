/* file_upload icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M18 32h12V20h8L24 6 10 20h8zm-8 4h28v4H10z" />
  </svg>
);
Icon.displayName = "FileUploadIcon";
Icon.isMaterialIcon = true;
export default Icon;
