/* local_hotel icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V10H2v30h4v-6h36v6h4V22c0-4.42-3.58-8-8-8z" />
  </svg>
);
Icon.displayName = "LocalHotelIcon";
Icon.isMaterialIcon = true;
export default Icon;
