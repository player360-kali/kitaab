import { FC, Fragment } from "react";
import Flex from "../Flex";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface CategoryCardType {
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
  type: string;
}
const CategoryCard: FC<CategoryCardType> = ({ data, type }) => {
  const navigate = useNavigate();
  console.log(data);
  return data
    ? data
        .filter((item) => item.type === type)
        .map((card) => (
          <Fragment key={card.id}>
            <Flex
              direction="column"
              justify="space-between"
              align="center"
              gap={2}
              classes="border border-[rgba(230_230_230)] pt-[30px] px-[10px] pb-[10px] rounded-[5px] cursor-pointer text-[#414141] hover:shadow-categoryCard"
              onClick={() =>
                card.type ? navigate(`/categories/${card.type}`) : ""
              }
            >
              <img
                className="w-[100%] h-[160px] mb-auto object-contain"
                src={card.img}
                alt={card.title}
              />
              <Flex direction="column">
                <div>
                  <h3 className="text-[16px] font-semibold">{card.title}</h3>
                  <p className="text-[12px] font-normal">{card.text}</p>
                </div>
                <h3 className="text-[16px] my-[10px] font-semibold">
                  {card.cost}
                </h3>
                <div>
                  <h4 className="text-[12px] font-semibold mb-[4px]">
                    O'lchamlar
                  </h4>
                  <Flex
                    direction="row"
                    align="center"
                    gap={4}
                    classes="mt-[4px]"
                  >
                    <div className="relative">
                      <p className="text-[10px] font-normal text-[#C4C4C4]">
                        Kengligi
                      </p>
                      <p className="text-[10px] font-normal text-[#414141]">
                        {card.width}
                      </p>
                      <span className="absolute top-[25%] right-[-20px] text-[12px]">
                        x{/* <img src="" alt="x"/> */}
                      </span>
                    </div>
                    <div className="relative">
                      <p className="text-[10px] font-normal text-[#C4C4C4]">
                        Chuqur
                      </p>
                      <p className="text-[10px] font-normal text-[#414141]">
                        {card.deep}
                      </p>
                      <span className="absolute top-[25%] right-[-20px] text-[12px]">
                        x{/* <img src="" alt="x"/> */}
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-normal text-[#C4C4C4]">
                        Balandligi
                      </p>
                      <p className="text-[10px] font-normal text-[#414141]">
                        {card.height}
                      </p>
                    </div>
                  </Flex>
                </div>
              </Flex>
              <Button
                width="100%"
                padding="10px 24px"
                bg="#18304C"
                className="text-[#fff]"
                rounded="4px"
              >
                Savatchaga qo'shish
              </Button>
            </Flex>
          </Fragment>
        ))
    : "Haven't any data";
};

export default CategoryCard;
