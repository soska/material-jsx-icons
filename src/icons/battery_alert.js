/* battery_alert icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8zM26 36h-4v-4h4v4zm0-8h-4V18h4v10z" />
  </svg>
);
Icon.displayName = "BatteryAlertIcon";
Icon.isMaterialIcon = true;
export default Icon;
