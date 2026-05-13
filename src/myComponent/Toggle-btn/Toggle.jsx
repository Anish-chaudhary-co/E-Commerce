import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
const Toggle = ({ handleThemeToggle, theme }) => {
  const [themeValue, setThemeValue] = useState("Dark");
  const [changed, setChanged] = useState(false);
  const handleValueChange = () => {
     if (themeValue === "Dark") {
        "Light";
      } else {
        "Dark";
      }
    setThemeValue(newValue);
    handleThemeToggle();
  };
  const toggleHandle = () => {
    handleThemeToggle();
  };

  return (
    <div className="container">
      <input
        type="checkbox"
        onChange={handleValueChange}
        id="slider"
        checked={theme === "Dark"}
      />
      <label htmlFor="slider" className="circle"></label>
    </div>
  );
};

export default Toggle;
