/* golf_course icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M39 36c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-5-24.15L18 4v36h-4v-3.46c-3.58.69-6 1.98-6 3.46 0 2.21 5.37 4 12 4s12-1.79 12-4c0-1.98-4.33-3.62-10-3.94v-18.1l12-6.11z" />
  </svg>
);
Icon.displayName = "GolfCourseIcon";
Icon.isMaterialIcon = true;
export default Icon;
