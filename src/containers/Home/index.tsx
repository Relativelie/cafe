import WaveIcon from 'assets/icons/WaveIcon';
import { useTheme } from 'theme/themeProvider';
import About from './About';
import Header from './Header';
import Offers from './Offers';
import Events from './Events';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-12">
      <div className="relative h-[20vh] md:h-full">
        <div className="top-0 bg-food-poster bg-[right_bottom_37%] bg-cover">
          <WaveIcon fill={theme.colors.default} />
        </div>
        <Header />
      </div>

      <About />
      <Offers />
      <Events />
    </div>
  );
};

export default Home;
