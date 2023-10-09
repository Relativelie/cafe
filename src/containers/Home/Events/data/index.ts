import { EventContent } from './models';
import EventOne from '../../../../assets/webp/news-one.webp';
import EventTwo from '../../../../assets/webp/news-two.webp';
import EventThree from '../../../../assets/webp/news-three.webp';

const getDay = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const eventsData: Array<EventContent> = [
  new EventContent({
    id: 1,
    title: 'Tropical day',
    description:
      'In this cold season, remember your palm vacation with us! Tropical cocktails, fresh seafood and more can help you relax as much as your vacation',
    date: getDay(0),
    image: EventThree,
  }),
  new EventContent({
    id: 2,
    title: 'Asian Day',
    description:
      'Do you miss your homeland, love dramas, or have you always wanted to visit Asia but didn`t have time? This day is especially for you! Our dishes will take you to the central streets of Tokyo, Beijing or Seoul',
    date: getDay(3),
    image: EventTwo,
  }),
  new EventContent({
    id: 3,
    title: 'Dating evening',
    description:
      'If you are looking for new acquaintances or just want to have a good time - this day is for you. On this day we do not reserve tables, you can take any table and have conversations with interesting people',
    date: getDay(4),
    image: EventOne,
  }),
];

export default eventsData;
