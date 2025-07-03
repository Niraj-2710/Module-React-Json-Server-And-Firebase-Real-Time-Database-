import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const DarkLight = () => {
  const [theme, setTheme] = useState("L");

  const toggleTheme = () => {
    setTheme(theme === "L" ? "dark" : "L");
  };

  return (
    <>
      <div>
        <button onClick={toggleTheme}>
          Switch {theme === "L" ? "Dark" : "L"} Mode
        </button>
      </div>
      <br />
      <br />
      <ThemeContext.Provider value={{ theme }}>
        <ThemedBox />
      </ThemeContext.Provider>
    </>
  );
};

const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: theme === "L" ? "#ff9" : "#444",
        color: theme === "L" ? "#000" : "#fff",
      }}
    >
      This Is The {theme} mode.
    </div>
  );
};

export default DarkLight;
