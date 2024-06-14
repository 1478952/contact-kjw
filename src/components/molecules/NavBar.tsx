import NavLink from "../atoms/NavLink";

const NavBar = () => {
  return (
    <nav
      className="flex items-center justify-center p-6 px-8"
      aria-label="Global"
    >
      <div className="flex gap-10">
        <NavLink href="#" text="Product" />
        <NavLink href="#" text="Features" />
        <NavLink href="#" text="Marketplace" />
        <NavLink href="#" text="Company" />
      </div>
    </nav>
  );
};

export default NavBar;
