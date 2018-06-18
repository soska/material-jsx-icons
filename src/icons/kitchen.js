/* kitchen icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M36 4.02L12 4C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-3.98-4-3.98zM36 40H12V21.95h24V40zm0-22H12V8h24v10zm-20-8h4v6h-4zm0 14h4v10h-4z" />
  </svg>
);
Icon.displayName = "KitchenIcon";
Icon.isMaterialIcon = true;
export default Icon;
