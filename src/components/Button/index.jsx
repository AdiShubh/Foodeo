import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    light_blue_A700: "bg-light_blue-A700 text-indigo-900",
    red_700: "bg-red-A700 text-red-700",
    gray_400: "bg-gray-400 text-gray-900",

    light_red: "bg-red-400/20 text-red-500",

    cart_button: "bg-white text-gray-900",

    gray_900: "bg-gray-900 text-white-A700",

    gray_200: "bg-gray-200 text-gray-700",

    red: "bg-red-500 text-white",
  },
};
const sizes = {
  "8xl": "h-[100px] px-[33px] text-[25px]",
  "7xl": "h-[80px] px-[35px] text-xl",
  "6xl": "h-[80px] px-[35px] text-[25px]",
  "5xl": "h-[74px] px-[35px] text-xl",
  "4xl": "h-[60px] px-[35px] text-xl",
  "3xl": "h-[60px] px-[15px] text-xl",
  "2xl": "h-[60px] px-[35px] text-[25px]",
  xl: "h-[54px] px-[35px] text-xl",
  lg: "h-[40px] px-[30px] text-xl text-center",
  md: "h-[40px] px-[15px] text-md",
  sm: "h-[35px] px-3.5 text-md",
  xs: "h-[25px] px-[7px] text-sm",
};

const CustomButton = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  shape = "",
  variant = "fill",
  size = "3xl",
  color = "red_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center hover:bg-gray-300 hover:text-orange-600 cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf([
    "8xl",
    "7xl",
    "6xl",
    "5xl",
    "4xl",
    "3xl",
    "2xl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs",
  ]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "light_blue_A700",
    "red_700",
    "gray_400",

    "cart_button",

    "light_red",

    "white_A700_7f",

    "gray_900",

    "gray_200",

    "red",
  ]),
};

export default CustomButton;
