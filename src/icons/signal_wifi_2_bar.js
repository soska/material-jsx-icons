/* signal_wifi_2_bar icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z"
      fillOpacity=".3"
    />
    <path d="M9.58 25.03l14.41 17.95.01.02.01-.02 14.41-17.95C37.7 24.47 32.2 20 24 20s-13.7 4.47-14.42 5.03z" />
  </svg>
);
Icon.displayName = "SignalWifi2BarIcon";
Icon.isMaterialIcon = true;
export default Icon;
