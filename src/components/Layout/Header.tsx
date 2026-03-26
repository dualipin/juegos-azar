import { Link, useLocation } from "react-router";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Acerca de" },
  ];

  return (
    <div className="navbar z-50 bg-base-100/30 shadow-sm max-w-4xl sticky top-2 mx-auto backdrop-blur-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Juegos Azar
        </Link>
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
          <li className="ml-2 flex items-center justify-center">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
