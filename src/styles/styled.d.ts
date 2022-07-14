import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryhover: string;
      background: string;
      text: string;
    };
    themeSwitch: {
      color: string;
      shadowPosition: string;
      background: string;
    };
  }
}
