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
    <div className="relative w-1/4 h-[40vh]">
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
              'h-48 absolute top-[70%] p-4 mx-6',
            )}
          >
            <div className="flex justify-around items-center mb-4">
              <h3>{title}</h3>
              <h4 className="font-cursive">{date}</h4>
            </div>

            <p className="h5 text-shadow-[0_4px_8px_#111111] text-justify">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
