import { useEffect, useState } from 'react';
import ScrollUp from 'assets/png/scroll-up.png';
import { useTheme } from 'theme/themeProvider';
import { useTranslation } from 'react-i18next';
import { onScrollToTop } from 'utils/onScrollToTop';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleScroll = () => {
    const heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    setIsVisible(winScroll > heightToHideFrom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible ? (
    <button
      className='flex flex-col items-center cursor-pointer h5 uppercase font-bold'
      style={{ color: theme.colors.success }}
      onClick={onScrollToTop}
    >
      <img src={ScrollUp} alt='scroll up' className='w-10 h-10' />
      {t('common.up')}
    </button>
  ) : null;
};

export default UpButton;
