import React from "react";
import "./App.css";
import { useTheme } from "./ThemeProvider";
const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return <button className="mero" onClick={toggleTheme}><i class="fa-solid fa-circle-half-stroke"></i></button>;
};

export default ThemeToggleButton;
