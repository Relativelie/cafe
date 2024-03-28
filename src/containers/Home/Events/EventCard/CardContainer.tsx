import clsx from 'clsx';
import { ThemeVariantsENUM } from 'theme/models';
import { useTheme } from 'theme/themeProvider';

type CardContainerProps = {
  children: React.ReactNode;
};

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  const { theme, selectedThemeTitle } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.opacityDefaultInverse,
      }}
      className={clsx(
        selectedThemeTitle === ThemeVariantsENUM.Dark ? 'text-black' : 'text-white',
        'flex flex-col justify-around h-full lg:h-56 2xl:h-40 absolute lg:top-[70%] p-2 md:p-4 lg:mx-6',
      )}
    >
      {children}
    </div>
  );
};
