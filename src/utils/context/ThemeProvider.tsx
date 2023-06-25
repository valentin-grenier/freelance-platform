import { ReactNode, createContext, useState } from 'react';

interface Props {
  children?: ReactNode;
}

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
