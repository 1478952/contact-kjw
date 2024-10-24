import Link from "next/link";
import styles from "./UnderlineLink.module.css";

interface UnderlineLinkProps {
  link: string;
  text: string;
}

const UnderlineLink = ({ link, text }: UnderlineLinkProps) => {
  return (
    <Link href={link} className={styles["link"]}>
      {text}
    </Link>
  );
};

export default UnderlineLink;
