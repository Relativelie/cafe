import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeVariantsENUM } from 'theme/models';
import { useTheme } from 'theme/themeProvider';
import { LocalStorageENUM, getFromLS } from 'utils/storage';

const InitializeAppSettings = () => {
  const { toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    setTheme();
    setLanguage();
  }, []);

  function setLanguage() {
    const savedLanguage = getFromLS(LocalStorageENUM.Language);
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }

  const setTheme = () => {
    const savedTheme = getFromLS(LocalStorageENUM.Theme) ?? ThemeVariantsENUM.Dark;
    toggleTheme(savedTheme);
  };

  return null;
};

export default InitializeAppSettings;
