import { AnchorLink } from 'components';
import { links } from './data';

const PersonalLinks = () => {
  return (
    <div className='flex justify-center gap-4'>
      {Object.entries(links).map(([key, { link, image }]) => (
        <AnchorLink key={link} link={link}>
          <img
            className='h-8 w-8 md:h-16 md:w-16 border-2 rounded-full filter grayscale hover:filter-none'
            src={image}
            alt={`Link to ${key}`}
          />
        </AnchorLink>
      ))}
    </div>
  );
};

export default PersonalLinks;
