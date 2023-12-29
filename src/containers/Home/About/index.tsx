import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const image = (bgImage: string) => {
    return <div className={clsx(bgImage, 'hidden md:block bg-cover bg-center h-96 w-64')}></div>;
  };

  return (
    <div className='flex justify-center items-center gap-4'>
      {image('bg-about-poster')}
      <div
        style={{
          backgroundColor: theme.colors.darkBrand,
          color: theme.colors.defaultInverse,
        }}
        className='h-80 md:w-72 flex flex-col items-center justify-around text-center p-2'
      >
        <div>
          <h2 style={{ color: theme.colors.lightBrand }} className='font-cursive'>
            {t('home.discover')}
          </h2>
          <h2 className='font-bold'>{t('home.ourWebsite')}</h2>
        </div>

        <h4 className='font-medium'>{t('home.about')}</h4>
      </div>
      {image('bg-about-poster-two')}
    </div>
  );
};

export default About;
