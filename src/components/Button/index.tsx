import React, { FC } from "react";

interface ButtonType {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  rounded?: string;
  bg?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "primary" | "cart" | "addToCart";
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonType> = ({
  children,
  width,
  height,
  padding,
  rounded,
  bg,
  leftIcon,
  rightIcon,
  type,
  onClick,
  className,
}) => {
  const primaryStyle =
    "rounded-full px-[14px] py-[6px] duration-200 border border-solid hover:border-[#fff] hover:shadow-primaryButton";
  const cartStyle =
    "bg-cart items-center py-[10px] px-[14px] gap-[6px] text-[#fff] text-[16px] rounded-[4px]";
  const addToCartStyle = "";
  return (
    <button
      style={{
        width: width || "",
        height: height || "",
        display: leftIcon || rightIcon ? "flex" : "",
        padding: padding || "",
        backgroundColor: bg || "",
        borderRadius: rounded || "",
      }}
      className={`${type === "primary" ? primaryStyle : type === "cart" ? cartStyle : type === "addToCart" ? addToCartStyle : ""} ${className}`}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon || ""}
    </button>
  );
};

export default Button;
