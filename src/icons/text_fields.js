/* text_fields icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M5 8v6h10v24h6V14h10V8H5zm38 10H25v6h6v14h6V24h6v-6z" />
  </svg>
);
Icon.displayName = "TextFieldsIcon";
Icon.isMaterialIcon = true;
export default Icon;
