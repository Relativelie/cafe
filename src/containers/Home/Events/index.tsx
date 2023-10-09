import { useTranslation } from 'react-i18next';
import ContentTitle from '../Common/ContentTitle';
import EventsContent from './EventsContent';

const Events = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between h-[50vh] overflow-hidden">
      <ContentTitle title={t('home.events').toUpperCase()} />
      <EventsContent />
    </div>
  );
};

export default Events;
