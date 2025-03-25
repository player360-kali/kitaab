import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import instagram_icon from "../../assets/instagram_icon.svg";
import youtube_icon from "../../assets/youtube_icon.svg";
import telegram_icon from "../../assets/telegram_icon.svg";
import phone_icon from "../../assets/phone_icon.png";

const Footer = () => {
  return (
    <>
      <Container>
        <Flex>
          <Flex
            direction="column"
            align="center"
            justify="center"
            classes="mx-auto mt-[60px]"
          >
            <Flex justify="space-between" gap={2}>
              <span className="block p-[16px] bg-[#8BC34A] rounded-full">
                <img
                  className="w-[24px] h-[24px] object-fill"
                  src={instagram_icon}
                  alt="Instagram"
                />
              </span>
              <span className="block p-[16px] bg-[#8BC34A] rounded-full">
                <img
                  className="w-[24px] h-[24px] object-fill"
                  src={telegram_icon}
                  alt="Telegram"
                />
              </span>
              <span className="block p-[16px] bg-[#8BC34A] rounded-full">
                <img
                  className="w-[24px] h-[24px] object-fill"
                  src={youtube_icon}
                  alt="Youtube"
                />
              </span>
              <span className="block p-[16px] bg-[#8BC34A] rounded-full">
                <img
                  className="w-[24px] h-[24px] object-fill"
                  src={phone_icon}
                  alt="Phone"
                />
              </span>
            </Flex>
            <Flex gap={4} classes="my-[40px]">
              <Link
                className="text-[18px] font-normal text-[#000000CC]"
                to={"/"}
              >
                Biz haqimizda
              </Link>
              <Link
                className="text-[18px] font-normal text-[#000000CC]"
                to={"/"}
              >
                Yangiliklar
              </Link>
              <Link
                className="text-[18px] font-normal text-[#000000CC]"
                to={"/"}
              >
                Blog
              </Link>
              <Link
                className="text-[18px] font-normal text-[#000000CC]"
                to={"/"}
              >
                Aloqa
              </Link>
            </Flex>
            <div>
              <p className="text-[15px] text-[#00000099]">
                © 2025{" "}
                <span className="text-[16px] font-semibold text-[#8BC34A]">
                  TurkistanTeam
                </span>{" "}
                tomonidan ishlab chiqilgan.
              </p>
            </div>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
