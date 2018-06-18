/* view_list icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M8 28h8v-8H8v8zm0 10h8v-8H8v8zm0-20h8v-8H8v8zm10 10h24v-8H18v8zm0 10h24v-8H18v8zm0-28v8h24v-8H18z" />
  </svg>
);
Icon.displayName = "ViewListIcon";
Icon.isMaterialIcon = true;
export default Icon;
