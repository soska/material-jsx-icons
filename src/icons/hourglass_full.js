/* hourglass_full icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M32 4H12v11h.02l-.02.02L20.98 24 12 32.98l.02.02H12v11h24V33h-.02l.02-.02L27.02 24 36 15.02l-.02-.02H36V4h-4z" />
  </svg>
);
Icon.displayName = "HourglassFullIcon";
Icon.isMaterialIcon = true;
export default Icon;
