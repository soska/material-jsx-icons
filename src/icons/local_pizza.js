/* local_pizza icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 4c-7.13 0-13.55 3.09-17.98 8L24 44l17.99-31.99C37.56 7.09 31.14 4 24 4zM14 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm10 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);
Icon.displayName = "LocalPizzaIcon";
Icon.isMaterialIcon = true;
export default Icon;
