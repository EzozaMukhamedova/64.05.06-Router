import React, { useState } from "react";
import "../Toggle/index";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    console.log("Theme changed to:", isDark ? "Light" : "Dark");
  };

  return (
    <div
      className={`toggle-container ${isDark ? "dark-mode" : ""}`}
      onClick={toggleTheme}
    >
      <div className="toggle-icon">
        <i className="sun-icon">☀️</i>
        <i className="moon-icon">🌙</i>
      </div>
      <div className="toggle-handle"></div>
    </div>
  );
}

export default ThemeToggle;
