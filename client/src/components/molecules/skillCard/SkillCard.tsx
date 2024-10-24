import styles from "./SkillCard.module.css";

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <article className={styles["box"]}>
      <div className={styles["bar"]}></div>
      <h3 className={styles["title"]}>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </article>
  );
};

export default SkillCard;
