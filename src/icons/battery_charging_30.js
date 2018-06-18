/* battery_charging_30 icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V29h4l8-15v11h4l-2.13 4H34V10.67C34 9.19 32.81 8 31.33 8z"
      fillOpacity=".3"
    />
    <path d="M22 40V29h-8v12.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V29h-6.13L22 40z" />
  </svg>
);
Icon.displayName = "BatteryCharging30Icon";
Icon.isMaterialIcon = true;
export default Icon;
