import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import cart_icon from "../../assets/cart_icon.svg";
import Flex from "../Flex";
import Button from "../Button";
import Container from "../Container";

const Nav = () => {
  return (
    <nav id="nav">
      <Container>
        <Flex width="100%" align="center" justify="space-between" wrap={true}>
          <div className="w-[180px] h-[45px]">
            <img src={logo} alt="Logo" />
          </div>

          <div className="relative">
            <input
              type="text"
              className="w-[380px] py-[14px] px-[38px] border border-solid border-[#E6E6E6] focus:border-[#a1a1a1] placeholder:text-[#414141] rounded-[4px]"
              placeholder="Qidiruv"
            />
            <img
              className="w-[16px] h-[18px] absolute top-[18px] left-[15px]"
              src={search_icon}
              alt="Search icon"
            />
          </div>

          <Flex justify="space-between" gap={2}>
            <Button type="primary">Bosh sahifa</Button>
            <Button type="primary">Kategoriyalar</Button>
            <Button type="primary">Biz haqimizda</Button>
            <Button
              type="cart"
              leftIcon={
                <img src={cart_icon} alt="Cart" className="w-[20px] h-[17px]" />
              }
            >
              Savatcha
            </Button>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};
export default Nav;
