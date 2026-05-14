import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
const Toggle = ({ handleThemeToggle, theme }) => {
  console.log(handleThemeToggle);
  
  return (
    <div className="container">
      <input
        type="checkbox"
        onChange={handleThemeToggle}
        id="slider"
        defaultChecked={theme === "Dark"}
      />
      <label htmlFor="slider" className="circle"></label>
    </div>
  );
};

export default Toggle;
