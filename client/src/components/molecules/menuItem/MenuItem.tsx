import styles from "./MenuItem.module.css";
import Link from "next/link";

interface MenuItemProps {
  text: string;
  link: string;
  pathname: string;
}

const MenuItem = ({ text, link, pathname }: MenuItemProps) => {
  return (
    <div
      className={`${styles["menu-item"]} ${
        pathname === link ? styles["active"] : ""
      }`}
    >
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default MenuItem;
