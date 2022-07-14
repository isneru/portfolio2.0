import React, { useEffect } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { Logo, Sidebar, ToggleThemeOverlay } from "./components";
import GlobalStyle from "./styles/global";
import usePersistedState from "./utils/usePersistedState";

import favicondark from "./assets/favicondark.ico";
import faviconlight from "./assets/faviconlight.ico";
import { Landing } from "./pages";

export const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {
    const favicon: any = document.getElementById("favicon");
    theme.title === "light" && (favicon.href = faviconlight);
    theme.title === "dark" && (favicon.href = favicondark);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Landing />
      <ToggleThemeOverlay toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};
