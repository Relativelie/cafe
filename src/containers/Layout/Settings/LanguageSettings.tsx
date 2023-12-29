import { AppRadioButton } from 'components';
import { LocalesVariantsENUM } from 'i18n/models';
import { useTranslation } from 'react-i18next';
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

        return (
          <AppRadioButton
            key={themeKey}
            label={t(`settings.${themeKey.toLowerCase()}`)}
            checked={i18n.language === value}
            onChange={() => changeLanguage(value)}
          />
        );
      })}
    </div>
  );
};

export default LanguageSettings;
