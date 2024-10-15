import styles from "./Sidebar.module.css";
import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className={styles["sidebar-container"]}>
      <div className={styles["sidebar-head"]}>
        <h1 className={styles.logo}></h1>
        <div className={styles["user-profile"]}>
          <div className={styles["user-img"]}>
            <Image
              src={"/assets/images/profile.png"}
              width={80}
              height={80}
              alt="profile"
              className={styles["image"]}
            />
          </div>
          <div className={styles["user-text"]}>
            <p className={styles["user-role"]}>어드민</p>
            <p className={styles["user-name"]}>
              <strong>김정운</strong> 님
            </p>
          </div>
        </div>
        <div className={styles["logout-button-wrap"]}></div>
      </div>
      <div className={styles["sidebar-body"]}>
        <ul className={styles["nav-list"]}></ul>
        <div className={styles["button-wrap"]}></div>
      </div>
    </nav>
  );
};

export default Sidebar;
