import WaveIcon from 'assets/icons/WaveIcon';
import { useTheme } from 'theme/themeProvider';

export const WaveBackground = () => {
  const { theme } = useTheme();

  return (
    <div className='top-0 bg-food-poster bg-[right_bottom_37%] bg-cover'>
      <WaveIcon fill={theme.colors.default} />
    </div>
  );
};
