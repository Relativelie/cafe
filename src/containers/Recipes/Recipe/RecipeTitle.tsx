import { useTheme } from 'theme/themeProvider';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.colors.opacityDefault }}
      className='col-start-2 row-start-2 relative p-4'
    >
      <div
        style={{
          backgroundColor: theme.colors.defaultInverse,
          color: theme.colors.default,
        }}
        className='absolute -bottom-4 left-[40%] px-4 py-[1px]'
      >
        <h5 className='font-semibold'>{'u can do it ♡'.toUpperCase()}</h5>
      </div>
      <div style={{ borderColor: theme.colors.defaultInverse }} className='border-2 p-4'>
        <p style={{ color: theme.colors.defaultInverse }} className='text-3xl xl:text-5xl'>
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
