import React, { FC } from "react";

interface ContainerTypes {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerTypes> = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1340px] mx-auto px-[100px] py-[14px] ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
export default Container;
