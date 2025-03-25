import Carusel from "../Carusel";
import HeaderTop from "./HeaderTop";
import Nav from "./Nav";

const Header = () => {
  const images: string[] = ["/imgs/slide/0.png", "/imgs/slide/1.png"];
  return (
    <>
      <HeaderTop />
      <Nav />
      <Carusel images={images} />
    </>
  );
};

export default Header;
