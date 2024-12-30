import React from "react";

import { useTheme } from "../../contextApi/theme/Theme";
import { ButtonThemeMode } from "./button";
import { ThemeDraculaButton } from "../themeDraculaButton";

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
    </div>
  );
}
