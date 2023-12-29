import { createContext, useContext, useState, useEffect } from 'react';
import { Theme, ThemeContextType, ThemeVariantsENUM } from './models';
import { lightTheme, darkTheme, barbieTheme, kenTheme } from './themes';
import { LocalStorageENUM, setToLS } from 'utils/storage';

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
  [ThemeVariantsENUM.Barbie]: barbieTheme,
  [ThemeVariantsENUM.Ken]: kenTheme,
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const [selectedThemeTitle, setSelectedThemeTitle] = useState<ThemeVariantsENUM>(
    ThemeVariantsENUM.Dark,
  );
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    setToLS(LocalStorageENUM.Theme, selectedThemeTitle);
  }, [theme]);

  const toggleTheme = (themeVariant: ThemeVariantsENUM) => {
    setTheme(themes[themeVariant]);
    setSelectedThemeTitle(themeVariant);
    setDefaultStyles(themes[themeVariant]);
  };

  const setDefaultStyles = (newTheme: Theme): void => {
    document.body.style.backgroundColor = newTheme.colors.default;
    document.body.style.color = newTheme.colors.defaultInverse;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, selectedThemeTitle }}>
      {children}
    </ThemeContext.Provider>
  );
}
