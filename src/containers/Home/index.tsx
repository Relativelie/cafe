import { useTheme } from 'theme/themeProvider';
import About from './About';
import Header from './Header';
import Offers from './Offers';
import Events from './Events';

const Home = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Header />
      <About />
      <Offers />
      <Events />
    </div>
  );
};

export default Home;
