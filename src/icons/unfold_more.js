/* unfold_more icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 11.66L30.34 18l2.83-2.83L24 6l-9.17 9.17L17.66 18 24 11.66zm0 24.68L17.66 30l-2.83 2.83L24 42l9.17-9.17L30.34 30 24 36.34z" />
  </svg>
);
Icon.displayName = "UnfoldMoreIcon";
Icon.isMaterialIcon = true;
export default Icon;
