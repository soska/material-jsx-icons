/* battery_80 icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V18h20v-7.33z"
      fillOpacity=".3"
    />
    <path d="M14 18v23.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V18H14z" />
  </svg>
);
Icon.displayName = "Battery80Icon";
Icon.isMaterialIcon = true;
export default Icon;
