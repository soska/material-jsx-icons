/* battery_charging_60 icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V22h7.73L26 14v8h8V10.67C34 9.19 32.81 8 31.33 8z"
      fillOpacity=".3"
    />
    <path d="M26 25h4l-8 15V29h-4l3.73-7H14v19.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V22h-8v3z" />
  </svg>
);
Icon.displayName = "BatteryCharging60Icon";
Icon.isMaterialIcon = true;
export default Icon;
