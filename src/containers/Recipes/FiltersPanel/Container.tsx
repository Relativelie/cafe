import clsx from 'clsx';
import { useTheme } from 'theme/themeProvider';

type ContainerProps = {
  isMobileView: boolean;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ isMobileView, children }) => {
  const { theme } = useTheme();
  const blockStyles = {
    borderColor: theme.colors.opacityDefaultInverse,
  };

  return (
    <div
      style={blockStyles}
      className={clsx(
        !isMobileView && 'fixed w-[25em] px-2 overflow-y-auto pt-2 h-[80%] border-r-[0.5px]',
        'flex flex-col gap-6 ',
      )}
    >
      {children}
    </div>
  );
};
