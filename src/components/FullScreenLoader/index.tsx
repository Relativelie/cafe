import Spinner from 'components/Spinner';
import { useTheme } from 'theme/themeProvider';

const FullScreenLoader = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.colors.opacityDefault }}
      className='fixed h-full w-full top-0 left-0 z-10'
    >
      <Spinner />
    </div>
  );
};

export default FullScreenLoader;
