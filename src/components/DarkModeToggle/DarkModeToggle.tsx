import { MoonIcon, SunIcon } from "lucide-react";

const DarkModeToggle = () => {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="light" />

      {/* sun icon */}
      <SunIcon />

      {/* moon icon */}
      <MoonIcon />
    </label>
  );
};

export default DarkModeToggle;
