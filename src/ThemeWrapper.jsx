import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme + "-theme";
  }, [theme]);

  return <>{children}</>;
};

export default ThemeWrapper;
