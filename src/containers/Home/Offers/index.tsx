import Content from './Content';
import ContentTitle from '../Common/ContentTitle';
import { useTranslation } from 'react-i18next';

const Offers = () => {
  const { t } = useTranslation();

  return (
    <div id="offers" className="flex flex-col items-center">
      <ContentTitle title={t('home.offers').toUpperCase()} />
      <Content />
    </div>
  );
};

export default Offers;