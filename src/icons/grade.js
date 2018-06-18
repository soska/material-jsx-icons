/* grade icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 34.54L36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z" />
  </svg>
);
Icon.displayName = "GradeIcon";
Icon.isMaterialIcon = true;
export default Icon;
