/* settings_phone icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M26 18h-4v4h4v-4zm8 0h-4v4h4v-4zm6 13c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zm-2-13v4h4v-4h-4z" />
  </svg>
);
Icon.displayName = "SettingsPhoneIcon";
Icon.isMaterialIcon = true;
export default Icon;
