import { useTheme } from 'theme/themeProvider';
import { AppSpinner } from 'components';

type AppSpinnerContainerProps = {
  className?: string;
};

const AppSpinnerContainer: React.FC<AppSpinnerContainerProps> = ({ className }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.colors.opacityDefault }}
      className='fixed h-full w-full top-0 left-0 z-10'
    >
      <AppSpinner className={className} />
    </div>
  );
};

export default AppSpinnerContainer;
