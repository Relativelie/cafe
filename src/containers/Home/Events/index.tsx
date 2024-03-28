import { useTranslation } from 'react-i18next';
import EventsList from './EventsList';
import { Title } from 'components';

const Events = () => {
  const { t } = useTranslation();
  return (
    <section aria-label='Events' className='flex flex-col justify-between overflow-hidden gap-4'>
      <Title headingText={t('home.our')} subHeadingText={t('home.events').toUpperCase()} />
      <EventsList />
    </section>
  );
};

export default Events;
