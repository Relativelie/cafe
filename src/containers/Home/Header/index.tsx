import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';
import { Button, ButtonSize, Title } from 'components';
import { TitleSizesEnum } from 'components/Title';
import { WaveBackground } from './WaveBackground';

const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className='relative h-[20vh] md:h-full' aria-label='Header'>
      <WaveBackground />
      <div className='absolute top-8 md:top-28 w-full flex flex-col justify-center items-center gap-1 md:gap-4'>
        <Title
          size={TitleSizesEnum.MEDIUM}
          headingText={t('home.welcome')}
          subHeadingText={t('cafeName')}
        />

        <h5 className='text-center'>{t('home.workSince')}</h5>
        <a href='#offers'>
          <Button size={ButtonSize.sm}>
            {t('home.our')} {t('home.offers')}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Header;
