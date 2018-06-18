/* person_pin icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 4H10C7.79 4 6 5.79 6 8v28c0 2.21 1.79 4 4 4h8l6 6 6-6h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-14 6.6c2.98 0 5.4 2.42 5.4 5.4 0 2.98-2.42 5.4-5.4 5.4-2.98 0-5.4-2.42-5.4-5.4 0-2.98 2.42-5.4 5.4-5.4zM36 32H12v-1.8c0-4 8-6.2 12-6.2s12 2.2 12 6.2V32z" />
  </svg>
);
Icon.displayName = "PersonPinIcon";
Icon.isMaterialIcon = true;
export default Icon;
