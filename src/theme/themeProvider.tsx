import { createContext, useContext, useState, useEffect } from 'react';
import { Theme, ThemeContextType, ThemeVariantsENUM } from './models';
import { setToLS } from 'utils/storage';
import { lightTheme, darkTheme } from './themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const themes = {
  [ThemeVariantsENUM.Light]: lightTheme,
  [ThemeVariantsENUM.Dark]: darkTheme,
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const [selectedThemeTitle, setSelectedThemeTitle] =
    useState<ThemeVariantsENUM>(ThemeVariantsENUM.Dark);

  useEffect(() => {
    setToLS('theme', theme);
  }, [theme]);

  const toggleTheme = (themeVariant: ThemeVariantsENUM) => {
    console.log(themeVariant, themes);
    setTheme(themes[themeVariant]);
    setSelectedThemeTitle(themeVariant);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, selectedThemeTitle }}>
      {children}
    </ThemeContext.Provider>
  );
}
