/* child_care icon*/
import React from "react";
const Icon = (props = {}) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="29" cy="21" r="2.5" />
    <circle cx="19" cy="21" r="2.5" />
    <path d="M45.89 25.33c.07-.43.11-.88.11-1.33s-.04-.9-.11-1.33c-.51-3.02-2.72-5.47-5.61-6.34-1.05-2.23-2.56-4.21-4.39-5.82C32.72 7.71 28.56 6 24 6s-8.72 1.71-11.89 4.51c-1.83 1.62-3.33 3.59-4.39 5.82-2.89.86-5.1 3.31-5.61 6.34-.07.43-.11.88-.11 1.33s.04.9.11 1.33c.51 3.02 2.72 5.47 5.61 6.34 1.04 2.21 2.53 4.17 4.34 5.78C15.24 40.27 19.41 42 24 42s8.76-1.73 11.94-4.55c1.81-1.61 3.3-3.57 4.34-5.78 2.89-.87 5.1-3.32 5.61-6.34zM38 28c-.2 0-.39-.03-.57-.06-.39 1.33-.98 2.58-1.72 3.72C33.2 35.47 28.89 38 24 38s-9.2-2.53-11.7-6.34c-.75-1.14-1.33-2.39-1.72-3.72-.19.03-.38.06-.58.06-2.2 0-4-1.8-4-4s1.8-4 4-4c.2 0 .39.03.57.06.39-1.33.98-2.58 1.72-3.72C14.8 12.53 19.11 10 24 10s9.2 2.53 11.7 6.34c.75 1.14 1.33 2.39 1.72 3.72.19-.03.38-.06.58-.06 2.2 0 4 1.8 4 4s-1.8 4-4 4zm-23 0c1.52 3.53 4.97 6 9 6s7.48-2.47 9-6H15z" />
  </svg>
);
Icon.displayName = "ChildCareIcon";
Icon.isMaterialIcon = true;
export default Icon;
