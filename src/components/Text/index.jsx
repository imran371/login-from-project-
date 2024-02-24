import React from "react";

const sizeClasses = {
  txtInterBold20: "font-bold font-inter",
  txtInterMedium30: "font-inter font-medium",
  txtInterRegular30: "font-inter font-normal",
  txtInterRegular25: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
