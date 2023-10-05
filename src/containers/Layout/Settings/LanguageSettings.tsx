import { useTranslation } from 'react-i18next';

const LanguageSettings = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <h4>{t('settings.language')}</h4>
      <h5>{t('settings.theme')}</h5>
    </div>
  );
};

export default LanguageSettings;
