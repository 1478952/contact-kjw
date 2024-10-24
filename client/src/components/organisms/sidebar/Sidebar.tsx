"use client";

import MenuItem from "@/components/molecules/menuItem/MenuItem";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HOME_PATH, PROJECTS_PATH } from "@/common/constants/url";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles["sidebar"]}>
      <div>
        <div className={styles["logo"]}>
          <Image
            src={"/assets/images/profile.png"}
            width={50}
            height={50}
            alt="profile"
            className={styles["image"]}
          />
          <span>Untitled</span>
        </div>

        <div className={styles["menu-section"]}>
          <h4>Portfolio</h4>
          <MenuItem text="Overview" link={HOME_PATH} pathname={pathname} />
          <MenuItem
            text="Persnal projects"
            link={PROJECTS_PATH}
            pathname={pathname}
          />
        </div>

        <div className={styles["menu-section"]}>
          <h4>Velog</h4>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
