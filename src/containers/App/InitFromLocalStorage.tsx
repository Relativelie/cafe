import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';
import { LocalStorageENUM, getFromLS } from 'utils/storage';

export const InitFromLocalStorage = () => {
  const { toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = getFromLS(LocalStorageENUM.Theme);
    const savedLanguage = getFromLS(LocalStorageENUM.Language);

    if (savedTheme) {
      toggleTheme(savedTheme);
    }

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return <div />;
};
