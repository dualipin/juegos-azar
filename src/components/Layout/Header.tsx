import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll para cambiar el estado
  useEffect(() => {
    const handleScroll = () => {
      // Se activa tras bajar 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Acerca de" },
  ];

  return (
    <div
      className={`
        navbar z-50 sticky mx-auto backdrop-blur-md rounded-box border border-base-content/10 transition-all duration-300
        max-w-4xl top-3 mt-3 shadow-sm bg-base-100/30
        ${isScrolled ? "py-1 min-h-12 scale-95 shadow-lg" : "py-4 min-h-16 scale-100"}
      `}
    >
      <div className="flex-1">
        <Link
          to="/"
          className={`btn btn-ghost transition-all ${isScrolled ? "text-lg" : "text-xl"}`}
        >
          Juegos Azar
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`btn btn-sm transition-all ${
                  location.pathname === path ? "btn-primary" : "btn-ghost"
                } ${isScrolled ? "h-8 min-h-8" : ""}`}
              >
                {label}
              </Link>
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
