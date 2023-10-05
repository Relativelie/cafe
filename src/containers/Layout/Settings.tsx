import { AppRadioButton } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeVariantsENUM } from 'theme/models';
import { themes, useTheme } from 'theme/themeProvider';

export const Settings = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, selectedThemeTitle } = useTheme();

  const onChange = (value: ThemeVariantsENUM): void => {
    toggleTheme(value);
  };

  return (
    <div className="">
      <h4>{t('settings.theme')}</h4>
      {Object.keys(ThemeVariantsENUM).map((themeKey) => {
        const value =
          ThemeVariantsENUM[themeKey as keyof typeof ThemeVariantsENUM];
        console.log('themeKey, themeKey', selectedThemeTitle, themeKey);
        return (
          <AppRadioButton
            key={themeKey}
            label={t(`settings.${themeKey.toLowerCase()}`)}
            checked={selectedThemeTitle === value}
            onChange={() => onChange(value)}
          />
        );
      })}
      <h5>{t('settings.theme')}</h5>
      <h4>{t('settings.language')}</h4>
      <h5>{t('settings.theme')}</h5>
    </div>
  );
};
