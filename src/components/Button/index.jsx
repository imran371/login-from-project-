import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]" };
const variants = {
  gradient: {
    green_A700_cyan_700_00: "bg-gradient1  text-white-A700",
    green_A700_01_cyan_700_00: "bg-gradient  text-white-A700",
  },
  fill: { green_A700_01: "bg-green-A700_01 text-white-A700" },
};
const sizes = { xs: "p-1.5", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf([
    "green_A700_cyan_700_00",
    "green_A700_01_cyan_700_00",
    "green_A700_01",
  ]),
};

export { Button };
