/* battery_charging_20 icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M22 40v-6h-8v7.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V34h-8.8L22 40z" />
    <path
      d="M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V34h8v-5h-4l8-15v11h4l-4.8 9H34V10.67C34 9.19 32.81 8 31.33 8z"
      fillOpacity=".3"
    />
  </svg>
);
Icon.displayName = "BatteryCharging20Icon";
Icon.isMaterialIcon = true;
export default Icon;
