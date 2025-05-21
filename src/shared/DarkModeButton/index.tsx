import { useEffect, useState } from "react";
import "./index.css"

const DarkModeButton = () => {
     const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme based on current data-theme
    const currentTheme = document.documentElement.dataset.theme || "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = newTheme;

    setTheme(newTheme);
  };
  return (
    <label className="cosmic-toggle" >
      <input className="toggle" type="checkbox"  onClick={() => toggleTheme()}/>
      <div className="slider">
        <div className="cosmos"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="toggle-orb">
          <div className="inner-orb"></div>
          <div className="ring"></div>
        </div>
     
      </div>
    </label>
  );
};

export default DarkModeButton;
