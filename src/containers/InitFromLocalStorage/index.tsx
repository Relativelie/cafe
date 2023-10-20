import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeVariantsENUM } from 'theme/models';
import { useTheme } from 'theme/themeProvider';
import { LocalStorageENUM, getFromLS } from 'utils/storage';

export const InitFromLocalStorage = () => {
  const { toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  const setLanguage = () => {
    const savedLanguage = getFromLS(LocalStorageENUM.Language);
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  };

  const setTheme = () => {
    let savedTheme = getFromLS(LocalStorageENUM.Theme);
    savedTheme = savedTheme ?? ThemeVariantsENUM.Dark;
    toggleTheme(savedTheme);
  };

  useEffect(() => {
    setTheme();
    setLanguage();
  }, []);

  return <div />;
};
