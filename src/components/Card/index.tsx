import { FC, Fragment } from "react";
import Flex from "../Flex";
import { useNavigate } from "react-router-dom";

interface CardType {
  data: {
    id: string;
    title: string;
    img: string;
    type: "divan" | "kreslo" | "stol" | "stul" | "kravat";
  }[];
}
const Card: FC<CardType> = ({ data }) => {
  const navigate = useNavigate();
  return data
    ? data.map((img) => (
        <Fragment key={img.id}>
          <Flex
            direction="column"
            justify="space-between"
            align="center"
            gap={2}
            classes="border border-[rgba(230_230_230)] rounded-[5px] px-[6px] py-[16px] cursor-pointer hover:shadow-categoryCard"
            onClick={() =>
              img.type ? navigate(`/categories/${img.type}`) : ""
            }
          >
            <img
              className="w-[190px] h-[130px] object-contain"
              src={img.img}
              alt={img.title}
            />
            <h4 className="text-title text-[18px] font-semibold">
              {img.title}
            </h4>
          </Flex>
        </Fragment>
      ))
    : "Haven't any data";
};

export default Card;
