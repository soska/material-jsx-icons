/* check_box icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
  </svg>
);
Icon.displayName = "CheckBoxIcon";
Icon.isMaterialIcon = true;
export default Icon;
