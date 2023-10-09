import { AppButton, ButtonSizeENUM } from 'components';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useTheme } from 'theme/themeProvider';

const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="absolute top-28 w-full flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col items-center">
        <h2
          style={{ color: theme.colors.lightBrand }}
          className="font-cursive text-shadow-lg"
        >
          {t('home.welcome')}
        </h2>
        <h1 className="text-shadow-lg">{t('cafeName')}</h1>
      </div>

      <h5>{t('home.workingSince')}</h5>
      <a href="#offers">
        <AppButton size={ButtonSizeENUM.sm}>
          {t('home.our')} {t('home.offers')}
        </AppButton>
      </a>
    </div>
  );
};

export default Header;
