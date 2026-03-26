import { Link, useLocation } from "react-router";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Acerca de" },
  ];

  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50 backdrop-blur-xs">
      <div className="container mx-auto px-4 py-4">
        {/* Header content */}
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-linear-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center hover-glow transition-all duration-300 hover:scale-110"></div>
            <h1 className="text-xl sm:text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300">
              Juegos Clásicos
            </h1>
          </div>

          {/* Navigation + Dark mode toggle (desktop) */}
          <div className="hidden sm:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-2">
                {navItems.map(({ path, label }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`
                        px-4 py-2 rounded-lg font-medium transition-all duration-300
                        hover:scale-105 active:scale-95 hover-glow
                        ${
                          location.pathname === path
                            ? "bg-primary-500 text-white shadow-glow animate-pulse hover:text-white"
                            : "text-card-foreground hover:text-white hover:bg-muted dark:hover:bg-secondary-700 hover:-translate-y-0.5"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-px h-6 bg-border"></div>
            <DarkModeToggle />
          </div>

          {/* Dark mode toggle (mobile only) */}
          <div className="sm:hidden flex items-center">
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="sm:hidden mt-4 pt-4 border-t border-border">
          <ul className="flex justify-center space-x-4">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-all duration-300
                    hover:scale-105 active:scale-95 hover-glow
                    ${
                      location.pathname === path
                        ? "bg-primary-500 text-white shadow-glow animate-pulse"
                        : "text-card-foreground hover:text-white hover:bg-muted dark:hover:bg-secondary-700 hover:-translate-y-0.5"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
