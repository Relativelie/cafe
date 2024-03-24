import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import URLS from 'constants/urls';

export const MenuList = () => {
  const { t } = useTranslation();

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
    <>
      {routes.map((route) => (
        <Link key={route.path} to={route.path} className='p md:h5'>
          {route.title}
        </Link>
      ))}
    </>
  );
};
