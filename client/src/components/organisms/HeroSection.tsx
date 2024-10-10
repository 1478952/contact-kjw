import ContainedButton from "../atoms/ContainedButton";
import Description from "../atoms/Description";
import Image from "next/image";
import Carousel from "./Carousel/Carousel";
import CarouselCell from "./CarouselCell/CarouselCell";

const TOTAL_CAROUSEL_COUNT = 4;

const HeroSection = () => {
  return (
    <section className="relative isolate px-6p pt-10 lg:px-8">
      <Image
        src={"/assets/images/profile.png"}
        width={80}
        height={80}
        alt="profile"
        className="absolute top-48 left-32"
      />
      <div className="mx-auto max-w-2xl py-24">
        <div className="text-center">
          <Carousel totalCellCount={TOTAL_CAROUSEL_COUNT}>
            <CarouselCell index={0} totalCellCount={TOTAL_CAROUSEL_COUNT}>
              test
            </CarouselCell>
            <CarouselCell index={1} totalCellCount={TOTAL_CAROUSEL_COUNT}>
              test2
            </CarouselCell>
            <CarouselCell index={2} totalCellCount={TOTAL_CAROUSEL_COUNT}>
              test3
            </CarouselCell>
            <CarouselCell index={3} totalCellCount={TOTAL_CAROUSEL_COUNT}>
              test3
            </CarouselCell>
          </Carousel>
          <Description text="안녕하세요!  FrontEnd Developer 김정운입니다." />

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ContainedButton text="Get started" />
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              더 알아봐요! <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
