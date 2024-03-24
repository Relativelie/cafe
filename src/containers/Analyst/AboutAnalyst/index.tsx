import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

import { ButtonSize, Backdrop, Button } from 'components';
import { useTheme } from 'theme/themeProvider';
import { memo } from 'react';

type AboutAnalystProps = {
  onClick: () => void;
};

const AboutAnalyst: React.FC<AboutAnalystProps> = memo(function AboutAnalyst({ onClick }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        theme.shadowColors.lightBrand,
        'relative flex p-5 bg-analyst-poster bg-cover bg-center shadow-lg',
      )}
      aria-labelledby='Analyst quotes and description'
    >
      <Backdrop />
      <div className='w-full flex flex-col items-center gap-5 z-10 text-white'>
        <h2 className='text-center text-6xl font-cursive text-shadow-[0_4px_8px_#111111]'>
          {t('analyst.quotes1')}
        </h2>
        <h2 className='text-center text-6xl font-cursive text-shadow-[0_4px_8px_#111111]'>
          {t('analyst.quotes2')}
        </h2>

        <div className='w-2/3'>
          <h5 className='text-lg text-center font-semibold text-shadow-[0_4px_8px_#111111]'>
            {t('analyst.description')}
          </h5>
        </div>

        <Button size={ButtonSize.sm} onClick={onClick}>
          {t('analyst.ready')}
        </Button>
      </div>
    </section>
  );
});

export default AboutAnalyst;
