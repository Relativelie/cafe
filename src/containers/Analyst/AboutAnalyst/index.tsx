import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

import { AppButton, ButtonSizeENUM, ImageBlackout } from 'components';
import { useTheme } from 'theme/themeProvider';

type AboutAnalystProps = {
  onClick: () => void;
};

const AboutAnalyst: React.FC<AboutAnalystProps> = ({ onClick }) => {
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
      <div className='w-full flex flex-col items-center gap-5 z-10 text-white'>
        <>
          <h2 className='text-center text-6xl font-cursive text-shadow-[0_4px_8px_#111111]'>
            {t('analyst.quotes1')}
          </h2>
          <h2 className='text-center text-6xl font-cursive text-shadow-[0_4px_8px_#111111]'>
            {t('analyst.quotes2')}
          </h2>
        </>
        <div className='w-2/3'>
          <h5 className='text-lg text-center font-semibold text-shadow-[0_4px_8px_#111111]'>
            {t('analyst.description')}
          </h5>
        </div>

        <AppButton size={ButtonSizeENUM.sm} onClick={onClick}>
          {t('analyst.ready')}
        </AppButton>
      </div>
    </div>
  );
};

export default AboutAnalyst;
