import AnimationTitle from "../atoms/AnimationTitle";
import BottomBlurEffect from "../atoms/effects/BottomBlurEffect";
import UnderlineLink from "../atoms/underliineLink/UnderlineLink";
import SkillCard from "../molecules/skillCard/SkillCard";
import styles from "./MainTemplate.module.css";

const MainTemplate = () => {
  return (
    <section>
      <h2 className={styles["title"]}>김정운 | Portfolio</h2>
      <p className={styles["paragraph"]}>
        어제보다 조금 더 나은 사람이 되고 싶은 웹 개발자 김정운입니다.
        <br />
        시간을 내어 제 웹페이지를 봐주셔서 감사합니다.
      </p>
      <div className={styles["link-wrap"]}>
        <UnderlineLink link="/" text="Instagram" />
        <UnderlineLink link="/" text="Github" />
        <UnderlineLink link="/" text="Email" />
      </div>
      <h3 className={styles["sub-title"]}>Skills</h3>
      <div className={styles["card-wrap"]}>
        <SkillCard
          title="이걸 조금 더 잘해요!"
          skills={["Javascript", "Typescript", "React.js", "Next.js"]}
        />
        <SkillCard
          title="경험 해봤어요!"
          skills={["Docker", "Nest.js", "Mysql", "Postgres", "Nx(Monorepo)"]}
        />
        <SkillCard title="공부 해봤어요!" skills={["Flutter"]} />
      </div>
      <AnimationTitle animationTexts={["KJW"]} />
      <BottomBlurEffect />
    </section>
  );
};

export default MainTemplate;
