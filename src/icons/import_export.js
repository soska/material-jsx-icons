/* import_export icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M18 6l-8 7.98h6V28h4V13.98h6L18 6zm14 28.02V20h-4v14.02h-6L30 42l8-7.98h-6z" />
  </svg>
);
Icon.displayName = "ImportExportIcon";
Icon.isMaterialIcon = true;
export default Icon;
