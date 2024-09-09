import NavLink from "../atoms/NavLink";

const NavBar = () => {
  return (
    <nav
      className="flex items-center justify-center p-6 px-8"
      aria-label="Global"
    >
      <div className="flex gap-10">
        <NavLink href="#" text="Main" />
        <NavLink href="#" text="Velog" />
      </div>
    </nav>
  );
};

export default NavBar;
