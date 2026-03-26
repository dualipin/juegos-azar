import { Link, useLocation } from "react-router";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Acerca de" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl sticky top-2 mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Juegos Azar</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map(({ path, label }) => (
            <li
              className={location.pathname === path ? "link-primary" : ""}
              key={path}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
          <DarkModeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Header;
