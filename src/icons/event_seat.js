/* event_seat icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 36v6h6v-6h20v6h6V30H8zm30-16h6v6h-6zM4 20h6v6H4zm30 6H14V10c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v16z" />
  </svg>
);
Icon.displayName = "EventSeatIcon";
Icon.isMaterialIcon = true;
export default Icon;
