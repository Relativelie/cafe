import Image from './Image';
import { CardTitle } from './CardTitle';
import { CardContainer } from './CardContainer';

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image }) => {
  return (
    <div className='relative self-center w-full md:w-2/3 2xl:w-1/4 h-[40vh]'>
      <div className='home-event hideEvents flex absolute duration-500 ease-in-out'>
        <div className='relative flex justify-around'>
          <Image src={image} alt={title} />
          <CardContainer>
            <CardTitle date={date} title={title} />
            <p className='p text-shadow-[0_4px_8px_#111111] text-justify'>{description}</p>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
