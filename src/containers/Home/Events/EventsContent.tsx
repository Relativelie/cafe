import { useEffect, useRef } from 'react';
import EventCard from './EventCard';
import eventsData from './data';

const EventsContent = () => {
  const newsItemRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    newsItemRef.current && observer.observe(newsItemRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries: any) => {
    if (entries[0].isIntersecting) {
      showEvents();
    }
  };

  const showEvents = () => {
    let events = document.querySelectorAll('.home-event');
    let i = 0;
    const myInterval = setInterval(function () {
      events[i].classList.remove('hideEvents');
      events[i].classList.add('showEvents');

      i++;
      if (i === eventsData.length) {
        clearInterval(myInterval);
      }
    }, 200);
  };

  return (
    <div
      className="w-full flex flex-col lg:flex-row gap-4 lg:justify-around"
      ref={newsItemRef}
    >
      {eventsData.map(({ id, title, date, description, image }) => (
        <EventCard
          key={`${id}-event`}
          title={title}
          date={date}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default EventsContent;
