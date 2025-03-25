import Container from "../Container";
import Flex from "../Flex";
import navigate from "../../assets/navigate.png";
import phone_icon from "../../assets/phone_icon.png";
import order_icon from "../../assets/order_icon.png";
import { Link } from "react-router-dom";
import instagram_icon from "../../assets/instagram_icon.svg";
import telegram_icon from "../../assets/telegram_icon.svg";
import youtube_icon from "../../assets/youtube_icon.svg";

const HeaderTop = () => {
  return (
    <div className="w-[100%] bg-main text-[#fff]">
      <Container>
        <Flex justify="space-between">
          <Flex
            width={{ xs: "480px" }}
            gap={2}
            direction="row"
            justify="space-between"
            align="center"
          >
            <Flex direction="row" align="center" gap={1}>
              <img
                className="w-[14px] h-[15px]"
                src={navigate}
                alt="Navitaion icon"
              />
              <p className="text-[12px]">Jizzax shahri, Sharof Rashidov</p>
            </Flex>
            <Flex direction="row" align="center" gap={1}>
              <img
                className="w-[14px] h-[15px]"
                src={phone_icon}
                alt="Navitaion icon"
              />
              <p className="text-[12px]">+998(90) 123-45-67</p>
            </Flex>
            <Flex direction="row" align="center" gap={1}>
              <img
                className="w-[24px] h-[14px]"
                src={order_icon}
                alt="Navitaion icon"
              />
              <p className="text-[12px]">Yetkazib berish</p>
            </Flex>
          </Flex>

          <Flex gap={2}>
            <Link to={"/"}>
              <img
                className="w-[15px] h-[16px]"
                src={instagram_icon}
                alt="Instagram icon"
              />
            </Link>

            <Link to={"/"}>
              <img
                className="w-[15px] h-[16px]"
                src={telegram_icon}
                alt="Telegram icon"
              />
            </Link>

            <Link to={"/"}>
              <img
                className="w-[15px] h-[16px]"
                src={youtube_icon}
                alt="Youtube icon"
              />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};
export default HeaderTop;
