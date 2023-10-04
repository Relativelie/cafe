import clsx from 'clsx';
import URLS from 'constants/urls';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from 'theme/themeProvider';

const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const routes = [
    {
      path: URLS.RECIPES.BASE,
      title: t('recipes.label'),
    },
    {
      path: URLS.ANALYST,
      title: t('analyst.label'),
    },
  ];

  return (
    <div
      style={{
        backgroundColor: theme.colors.darkBrand,
        borderBottomColor: theme.colors.defaultInverse,
      }}
      className="h-14"
    >
      <div className="fixed top-0 left-0 right-0 flex justify-between mx-2 px-2 py-4 border-b-[0.5px] z-20">
        <Link to={URLS.HOME} className="h4 font-dance">
          {t('cafeName')}
        </Link>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link key={route.path} to={route.path}>
              <h5>{route.title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
