import React, { FC, memo } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface FlexProps {
  children: React.ReactNode;
  width?: string | object;
  height?: string | object;
  bgColor?: string;
  direction?: "column" | "row";
  justify?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "end"
    | "center";
  align?: "start" | "center" | "end" | "normal";
  classes?: string;
  gap?: number;
  onClick?: () => void;
  wrap?: boolean;
}

const Flex: FC<FlexProps> = memo(
  ({
    children,
    width = "auto",
    height = "auto",
    bgColor,
    direction,
    justify,
    align,
    classes,
    gap,
    onClick,
    wrap,
  }) => {
    const sx: SxProps<Theme> = Object.fromEntries(
      Object.entries({
        display: "flex",
        width,
        height,
        backgroundColor: bgColor,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexWrap: wrap ? "wrap" : undefined,
        //eslint-disable-next-line
      }).filter(([_, v]) => v !== undefined),
    );

    console.log("asdasdas");

    return (
      <Box className={classes} sx={sx} onClick={onClick}>
        {children}
      </Box>
    );
  },
);

export default Flex;
