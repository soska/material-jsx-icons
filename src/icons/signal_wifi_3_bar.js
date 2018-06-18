/* signal_wifi_3_bar icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z"
      fillOpacity=".3"
    />
    <path d="M7.07 21.91l16.92 21.07.01.02.02-.02 16.92-21.07C40.08 21.25 33.62 16 24 16c-9.63 0-16.08 5.25-16.93 5.91z" />
  </svg>
);
Icon.displayName = "SignalWifi3BarIcon";
Icon.isMaterialIcon = true;
export default Icon;
