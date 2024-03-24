import { useTheme } from 'theme/themeProvider';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className='h-16'>
      <div
        style={{
          backgroundColor: theme.colors.darkBrand,
        }}
        className='flex justify-between items-center px-2 py-4 border-b-[0.5px] fixed top-0 left-0 right-0 z-20'
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
