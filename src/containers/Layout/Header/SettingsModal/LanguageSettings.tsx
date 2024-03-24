import { LocalesVariantsENUM } from 'i18n/models';
import { useTranslation } from 'react-i18next';

import { RadioButton } from 'components';
import { useTheme } from 'theme/themeProvider';
import { LocalStorageENUM, setToLS } from 'utils/storage';

const LanguageSettings = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const changeLanguage = (value: LocalesVariantsENUM): void => {
    i18n.changeLanguage(value);
    setToLS(LocalStorageENUM.Language, value);
  };

  return (
    <div className='flex flex-col gap-2'>
      <h4 style={{ color: theme.colors.defaultInverse }}>{t('settings.language')}</h4>
      {Object.keys(LocalesVariantsENUM).map((themeKey) => {
        const value = LocalesVariantsENUM[themeKey as keyof typeof LocalesVariantsENUM];
        const label = t(`settings.${themeKey.toLowerCase()}`);

        return (
          <RadioButton
            id={label}
            name='language'
            key={themeKey}
            label={label}
            checked={i18n.language === value}
            onChange={() => changeLanguage(value)}
          />
        );
      })}
    </div>
  );
};

export default LanguageSettings;
