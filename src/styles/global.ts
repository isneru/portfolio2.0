import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 150ms ease-in-out, color 150ms ease-in-out;
  }
    
  html {
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.background}; 
      
    }
 
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.primary}; 
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.primaryhover}; 
    }
  }
  
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Poppins', sans-serif;
  }

  @keyframes pulse {
    0% {
      color: ${(props) => props.theme.colors.text};
      fill: ${(props) => props.theme.colors.text};
    }
    100% {
      color: ${(props) => props.theme.colors.primary};
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;
