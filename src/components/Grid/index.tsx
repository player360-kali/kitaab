import { Box } from "@mui/material";
import { FC, Fragment } from "react";

interface GridTypes {
  data: {
    id: string;
    title: string;
    text: string;
    cost: string;
    width: string;
    height: string;
    deep: string;
    img: string;
    type: "divan" | "kreslo" | "stol" | "stul" | "kravat";
  }[];
}

const Grid: FC<GridTypes> = ({ data }) => {
  return (
    <Box>
      {data.map((item) => (
        <Fragment key={item.id}>
          <div></div>
        </Fragment>
      ))}
    </Box>
  );
};

export default Grid;
