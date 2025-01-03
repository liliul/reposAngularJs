import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const themes = {
  light: {
    colors: {
      background: "white",
      text: "black"
    }
  },
  dark: {
    colors: {
      background: "black",
      text: "white"
    }
  },
  dracula: {
    colors: {
      background: "#21222c",
      text: "#8be9fd"
    }
  }
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
