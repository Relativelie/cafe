import clsx from 'clsx';
import { useTheme } from 'theme/themeProvider';
import { ThemeVariantsENUM } from 'theme/models';

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  description,
  image,
}) => {
  const { theme, selectedThemeTitle } = useTheme();

  return (
    <div className="relative self-center w-full md:w-2/3 2xl:w-1/4 h-[40vh]">
      <div className="home-event hideEvents flex absolute duration-500 ease-in-out">
        <div className="relative flex justify-around">
          <div className="shadow-black shadow-md">
            <img src={image} alt="event" />
          </div>

          <div
            style={{
              backgroundColor: theme.colors.opacityDefaultInverse,
            }}
            className={clsx(
              selectedThemeTitle === ThemeVariantsENUM.Dark
                ? 'text-black'
                : 'text-white',
              'flex flex-col justify-around h-full lg:h-56 2xl:h-40 absolute lg:top-[70%] p-2 md:p-4 lg:mx-6',
            )}
          >
            <div className="flex flex-col md:flex-row justify-around items-center mb-4">
              <h3 className="h4">{title}</h3>
              <h4 className="h5 font-cursive">{date}</h4>
            </div>

            <p className="p text-shadow-[0_4px_8px_#111111] text-justify">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
