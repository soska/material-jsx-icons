/* games icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z" />
  </svg>
);
Icon.displayName = "GamesIcon";
Icon.isMaterialIcon = true;
export default Icon;
