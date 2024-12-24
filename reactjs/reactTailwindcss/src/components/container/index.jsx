import React from "react";

import { useTheme, themes } from "../../contextApi/theme/Theme";

export default function Container({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.text
      }}
    >
      {children}

      <hr />

      <button
        className="w-[150px] h-[40px] bg-green-600 rounded-sm m-2"
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        {theme === themes.light ? "dark mode" : "light mode"}
      </button>
    </div>
  );
}