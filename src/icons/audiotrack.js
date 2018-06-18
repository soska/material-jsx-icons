/* audiotrack icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M24 6v18.55c-.94-.33-1.94-.55-3-.55-4.97 0-9 4.03-9 9s4.03 9 9 9c4.63 0 8.4-3.51 8.9-8h.1V12h8V6H24z" />
  </svg>
);
Icon.displayName = "AudiotrackIcon";
Icon.isMaterialIcon = true;
export default Icon;
