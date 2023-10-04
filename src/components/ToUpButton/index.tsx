import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ScrollUp from 'assets/png/scroll-up.png';
import { useTheme } from 'theme/themeProvider';
import { useTranslation } from 'react-i18next';

const AppUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleScroll = () => {
    const heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHideFrom) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          className={clsx('flex flex-col items-center cursor-pointer')}
          onClick={onClick}
        >
          <img src={ScrollUp} alt="scroll up" className="w-10 h-10" />
          <h5
            style={{ color: theme.colors.success }}
            className="uppercase font-bold"
          >
            {t('common.up')}
          </h5>
        </div>
      )}
    </div>
  );
};

export default AppUpButton;
