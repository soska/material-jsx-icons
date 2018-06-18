/* storage icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M4 40h40v-8H4v8zm4-6h4v4H8v-4zM4 8v8h40V8H4zm8 6H8v-4h4v4zM4 28h40v-8H4v8zm4-6h4v4H8v-4z" />
  </svg>
);
Icon.displayName = "StorageIcon";
Icon.isMaterialIcon = true;
export default Icon;
