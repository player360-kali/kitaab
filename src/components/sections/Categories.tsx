import React, { FC } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";

interface CategoriesType {
  children: React.ReactNode;
  title?: string;
  link?: string;
  to?: string;
  leftLinkIcon?: React.ReactNode;
  rightLinkIcon?: React.ReactNode;
}

const Categories: FC<CategoriesType> = ({
  children,
  title,
  link,
  to,
  leftLinkIcon,
  rightLinkIcon,
}) => {
  return (
    <Container className="mt-[60px]">
      <Flex direction="column">
        <Flex align="center" justify="space-between">
          <h2 className="text-title text-[32px] font-bold">{title}</h2>
          <Link
            to={`${to ? to : "/"}`}
            className="text-link text-[16px] font-semibold gap-[12px]"
            style={{ display: leftLinkIcon || rightLinkIcon ? "flex" : "" }}
          >
            {leftLinkIcon}
            {link}
            {rightLinkIcon || ""}
          </Link>
        </Flex>
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-cols-1 gap-4 mt-[30px]">
          {children}
        </div>
      </Flex>
    </Container>
  );
};

export default Categories;
