import React, { useEffect } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { ToggleThemeOverlay } from "./components";
import GlobalStyle from "./styles/global";
import usePersistedState from "./utils/usePersistedState";

export const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {
    const favicon: any = document.getElementById("favicon");
    favicon && (favicon.href = theme.faviconSrc);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeOverlay toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};
