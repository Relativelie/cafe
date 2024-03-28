import { useTranslation } from 'react-i18next';
import Content from './Content';
import { Title } from 'components';

const Offers = () => {
  const { t } = useTranslation();

  return (
    <section id='offers' className='flex flex-col items-center gap-4' aria-label='Special Offers'>
      <Title headingText={t('home.our')} subHeadingText={t('home.offers').toUpperCase()} />
      <Content />
    </section>
  );
};

export default Offers;
