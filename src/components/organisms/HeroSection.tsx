import { MAIN_TEXTS } from "@/common/constants/data";
import AnimationTitle from "../atoms/AnimationTitle";
import ContainedButton from "../atoms/ContainedButton";
import Description from "../atoms/Description";
import BottomBlurEffect from "../atoms/effects/BottomBlurEffect";
import TopBlurEffect from "../atoms/effects/TopBlurEffect";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <TopBlurEffect />
      <Image
        src={"/assets/images/profile.png"}
        width={80}
        height={80}
        alt="profile"
        className="absolute top-48 left-32"
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <AnimationTitle animationTexts={MAIN_TEXTS} />
          <Description text="반가워요! FrontEnd Developer 김정운입니다." />

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ContainedButton text="Get started" />
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <BottomBlurEffect />
    </section>
  );
};

export default HeroSection;
