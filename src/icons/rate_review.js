/* rate_review icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 28v-4.95L25.76 9.29c.39-.39 1.02-.39 1.41 0l3.54 3.54c.39.39.39 1.02 0 1.41L16.95 28H12zm24 0H21l4-4h11v4z" />
  </svg>
);
Icon.displayName = "RateReviewIcon";
Icon.isMaterialIcon = true;
export default Icon;
