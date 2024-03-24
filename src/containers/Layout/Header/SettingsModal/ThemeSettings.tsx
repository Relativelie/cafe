import { useTranslation } from 'react-i18next';

import { RadioButton } from 'components';
import { ThemeVariantsENUM } from 'theme/models';
import { useTheme } from 'theme/themeProvider';

const ThemeSettings = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, selectedThemeTitle } = useTheme();

  const onChange = (value: ThemeVariantsENUM): void => {
    toggleTheme(value);
  };

  return (
    <div className='flex flex-col gap-2'>
      <h4 style={{ color: theme.colors.defaultInverse }}>{t('settings.theme')}</h4>
      {Object.keys(ThemeVariantsENUM).map((themeKey) => {
        const value = ThemeVariantsENUM[themeKey as keyof typeof ThemeVariantsENUM];
        const label = t(`settings.${themeKey.toLowerCase()}`);

        return (
          <RadioButton
            id={label}
            name='theme'
            key={themeKey}
            label={label}
            checked={selectedThemeTitle === value}
            onChange={() => onChange(value)}
          />
        );
      })}
    </div>
  );
};

export default ThemeSettings;
