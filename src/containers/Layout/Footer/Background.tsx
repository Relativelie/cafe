import { Backdrop } from 'components';
import { useTheme } from 'theme/themeProvider';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <footer className='h-28 md:h-32 mt-8'>
      <div className='fixed bottom-0 left-0 right-0 z-20 flex bg-sea-poster h-28 md:h-32 bg-[center_top_40%] bg-cover'>
        <Backdrop />
        <div
          style={{ borderColor: theme.colors.lightBrand }}
          className='absolute bottom-0 w-full h-full border-t flex flex-col md:flex-row justify-around items-center py-4 md:py-0 md:gap-5 z-10 text-white'
        >
          {children}
        </div>
      </div>
    </footer>
  );
};

export default Container;
