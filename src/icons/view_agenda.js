/* view_agenda icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M40 26H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zm0-20H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
  </svg>
);
Icon.displayName = "ViewAgendaIcon";
Icon.isMaterialIcon = true;
export default Icon;
