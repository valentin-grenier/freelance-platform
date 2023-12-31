import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import { ThemeContext } from '../context/ThemeContext';

const StyledGlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    background: ${({ isDarkMode }) =>
      isDarkMode ? colors.backgroundDark : colors.backgroundLight};
    color: ${({ isDarkMode }) =>
      isDarkMode ? colors.primary : colors.backgroundDark};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  h1 {
  font-size: 3.2em;
  line-height: 1.1;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;

    &:hover {
      color: #535bf2;
    }
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: #646cff;
    }

    &:focus, &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }

  nav {
    a {
      color: ${({ isDarkMode }) =>
        isDarkMode ? colors.primary : colors.backgroundDark};
    }
  }


  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
`;

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
