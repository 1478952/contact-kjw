import AnimationTitle from "../atoms/AnimationTitle";
import ContainedButton from "../atoms/ContainedButton";
import Description from "../atoms/Description";
import Title from "../atoms/Title";
import BottomBlurEffect from "../atoms/effects/BottomBlurEffect";
import TopBlurEffect from "../atoms/effects/TopBlurEffect";

const HeroSection = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <TopBlurEffect />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <AnimationTitle
            animationTexts={[
              "FrontEnd",
              "Developer",
              "React",
              "Next",
              "Nest",
              "1478952",
            ]}
          />
          <Description text="2년째 프론트엔드 개발중인 김정운입니다." />

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
