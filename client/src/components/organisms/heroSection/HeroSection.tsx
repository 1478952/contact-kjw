import styles from "./HeroSection.module.css";

import ContainedButton from "../../atoms/ContainedButton";
import Description from "../../atoms/Description";
import Slider from "../slider/Slider";

const HeroSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["container"]}>
        <div className={styles["wrap"]}>
          <Slider
            data={[
              { children: "FrontEnd Developer", bgColor: "#5138BE" },
              { children: "FrontEnd Developer", bgColor: "#7a768c" },
              { children: "FrontEnd Developer", bgColor: "#388fbe" },
              { children: "FrontEnd Developer", bgColor: "#7a768c" },
              { children: "FrontEnd Developer", bgColor: "#5138BE" },
              { children: "FrontEnd Developer", bgColor: "#388fbe" },
              { children: "FrontEnd Developer", bgColor: "#7a768c" },
              { children: "FrontEnd Developer", bgColor: "#5138BE" },
              { children: "FrontEnd Developer", bgColor: "#388fbe" },
              { children: "FrontEnd Developer", bgColor: "#7a768c" },
              { children: "FrontEnd Developer", bgColor: "#5138BE" },
              { children: "FrontEnd Developer", bgColor: "#388fbe" },
            ]}
          />
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
