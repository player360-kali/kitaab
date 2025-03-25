import { FC, useRef } from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../Button";
import left_icon from "../../assets/left_icon.svg";
import right_icon from "../../assets/right_icon.svg";
import Container from "../Container";

interface CaruselTypes {
  images: string[];
}

const Carusel: FC<CaruselTypes> = ({ images }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Container>
      <div className="relative">
        <Button
          width="54px"
          padding="14px"
          bg="white"
          rounded="999px"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[50%] left-[-30px] z-[20] shadow-navigationButton"
        >
          <img
            width="20px"
            height="20px"
            className="py-[4px] mx-auto object-cover"
            src={left_icon}
            alt="Left arrow"
          />
        </Button>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          spaceBetween={300}
          autoplay={{
            delay: 3000,
          }}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-[100%]"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="w-[100%] shadow-caruselSlide">
              <img
                className="w-[100%] h-[500px] shadow-caruselSlide mx-auto object-cover rounded-[16px]"
                src={item}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          width="54px"
          padding="14px"
          bg="white"
          rounded="999px"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[50%] right-[-30px] z-[20] shadow-navigationButton"
        >
          <img
            width="20px"
            height="20px"
            className="py-[4px] mx-auto object-cover"
            src={right_icon}
            alt="Right arrow"
          />
        </Button>
      </div>
    </Container>
  );
};

export default Carusel;
