import { AppButton, ButtonSizeENUM } from 'components';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';

const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className='absolute top-8 md:top-28 w-full flex flex-col justify-center items-center gap-1 md:gap-4'>
      <div className='flex flex-col items-center'>
        <h2
          style={{ color: theme.colors.lightBrand }}
          className='font-cursive text-shadow-[0_4px_8px_#111111]'
        >
          {t('home.welcome')}
        </h2>
        <h1 className='h4 md:h1 text-white text-shadow-[0_4px_8px_#111111]'>{t('cafeName')}</h1>
      </div>

      <h5 className='text-center'>{t('home.workingSince')}</h5>
      <a href='#offers'>
        <AppButton size={ButtonSizeENUM.sm}>
          {t('home.our')} {t('home.offers')}
        </AppButton>
      </a>
    </div>
  );
};

export default Header;
