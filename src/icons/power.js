/* power icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M32.02 14H32V6h-4v8h-8V6h-4v8h-.02C14 13.99 12 15.99 12 17.99v10.99L19 36v6h10v-6l7-7.03V17.98c0-1.99-2-3.99-3.98-3.98z" />
  </svg>
);
Icon.displayName = "PowerIcon";
Icon.isMaterialIcon = true;
export default Icon;
