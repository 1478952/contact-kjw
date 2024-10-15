import styles from "./Navbar.module.css";
import NavLink from "../../atoms/NavLink";

const NavBar = () => {
  return (
    <nav className={styles["nav"]} aria-label="Global">
      <div className="flex gap-10">
        <NavLink href="#" text="Main" />
        <NavLink href="/velog" text="Velog" />
      </div>
    </nav>
  );
};

export default NavBar;
