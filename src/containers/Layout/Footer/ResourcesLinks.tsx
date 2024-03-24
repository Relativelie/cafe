import { AnchorLink } from 'components';
import { useTranslation } from 'react-i18next';

const ResourcesLinks = () => {
  const { t } = useTranslation();

  return (
    <h5 className='text-white text-center'>
      {t('footer.imageSource')}{' '}
      <AnchorLink link={t('footer.imageSource')} title={`${t('footer.unsplashLink')}`} />
    </h5>
  );
};

export default ResourcesLinks;
