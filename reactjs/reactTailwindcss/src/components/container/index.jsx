import React from "react";

import { useTheme, themes } from "../../contextApi/theme/Theme";
import { ButtonThemeMode } from "./button";
import { ThemeDraculaButton } from "../themeDraculaButton";
import { ThemesModeButton } from "../buttonThemeMode";

export default function Container({ children }) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.text
      }}
    >
      {children}

      <hr />

      <ButtonThemeMode />
      <ThemeDraculaButton />

      <ThemesModeButton
        titulo="Dark"
        currentTheme={themes.dark}
      />
      <ThemesModeButton
        titulo="Light"
        currentTheme={themes.light}
      /> 
      <ThemesModeButton
        titulo="Dracula"
        currentTheme={themes.dracula}
      />    
    </div>
  );
}
