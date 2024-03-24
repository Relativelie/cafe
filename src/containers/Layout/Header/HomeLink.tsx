import { Link } from 'react-router-dom';
import URLS from 'constants/urls';
import { useTranslation } from 'react-i18next';

export const HomeLink = () => {
  const { t } = useTranslation();

  return (
    <Link to={URLS.HOME} className='font-cursive'>
      {t('cafeName')}
    </Link>
  );
};
