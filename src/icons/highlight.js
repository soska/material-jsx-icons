/* highlight icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M12 28l6 6v10h12V34l6-6V18H12zM22 4h4v6h-4zM7 11.75l2.828-2.828 4.243 4.243-2.82 2.828zm26.923 1.422l4.242-4.242 2.83 2.828L36.75 16z" />
  </svg>
);
Icon.displayName = "HighlightIcon";
Icon.isMaterialIcon = true;
export default Icon;
