import React from "react";

import { Button, SunOrMoon, Sun, Shadow } from "./styles";

interface ToggleThemeProps {
  toggleTheme(): void;
}

export const ToggleThemeOverlay: React.FC<ToggleThemeProps> = ({
  toggleTheme,
}) => {
  return (
    <Button onClick={toggleTheme}>
      <SunOrMoon>
        <Sun />
        <Shadow />
      </SunOrMoon>
    </Button>
  );
};
