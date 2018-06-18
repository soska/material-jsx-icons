/* voice_chat icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 24l-8-6.4V28H12V12h16v6.4l8-6.4v16z" />
  </svg>
);
Icon.displayName = "VoiceChatIcon";
Icon.isMaterialIcon = true;
export default Icon;
