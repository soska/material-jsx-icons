/* assignment_turned_in icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM24 6c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm-4 28l-8-8 2.83-2.83L20 28.34l13.17-13.17L36 18 20 34z" />
  </svg>
);
Icon.displayName = "AssignmentTurnedInIcon";
Icon.isMaterialIcon = true;
export default Icon;
