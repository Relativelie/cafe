import { clsx } from 'clsx';
import { AppButton, ButtonSizeENUM } from 'components';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';

const AboutAnalyst: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        theme.shadowColors.lightBrand,
        'flex flex-col p-5 items-center gap-5 bg-analyst-poster bg-cover bg-center shadow-lg',
      )}
    >
      <>
        <h2 className="text-6xl font-dance text-shadow-lg">
          {t('analyst.quotes1')}
        </h2>
        <h2 className="text-6xl font-dance text-shadow-lg">
          {t('analyst.quotes2')}
        </h2>
      </>
      <div className="w-2/3">
        <h5 className="text-lg text-center font-semibold text-shadow-lg">
          {t('analyst.description')}
        </h5>
      </div>

      <AppButton size={ButtonSizeENUM.sm}>{t('analyst.ready')}</AppButton>
    </div>
  );
};

export default AboutAnalyst;
