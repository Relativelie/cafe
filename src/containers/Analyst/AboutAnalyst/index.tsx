import { clsx } from 'clsx';
import { AppButton, ButtonSizeENUM, ImageBlackout } from 'components';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';

const AboutAnalyst: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        theme.shadowColors.lightBrand,
        'relative flex p-5 bg-analyst-poster bg-cover bg-center shadow-lg',
      )}
    >
      <ImageBlackout />
      <div className="w-full flex flex-col items-center gap-5 z-10 text-white">
        <>
          <h2 className="text-6xl font-cursive text-shadow-lg">
            {t('analyst.quotes1')}
          </h2>
          <h2 className="text-6xl font-cursive text-shadow-lg">
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
    </div>
  );
};

export default AboutAnalyst;
