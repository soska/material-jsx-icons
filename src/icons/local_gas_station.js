/* local_gas_station icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M39.54 14.46l.03-.03L32.12 7 30 9.12l4.22 4.22C32.34 14.06 31 15.87 31 18c0 2.76 2.24 5 5 5 .71 0 1.39-.15 2-.42V37c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-2.21-1.79-4-4-4h-2V10c0-2.21-1.79-4-4-4H12c-2.21 0-4 1.79-4 4v32h20V27h3v10c0 2.76 2.24 5 5 5s5-2.24 5-5V18c0-1.38-.56-2.63-1.46-3.54zM24 20H12V10h12v10zm12 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);
Icon.displayName = "LocalGasStationIcon";
Icon.isMaterialIcon = true;
export default Icon;
