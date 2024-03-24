import { useTheme } from 'theme/themeProvider';

type ImageProps = {
  image: string;
};

const IngredientsImage: React.FC<ImageProps> = ({ image }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{ borderColor: theme.colors.defaultInverse }}
      className='w-fit h-fit border-4 rounded-full overflow-hidden'
    >
      <img src={image} alt='' />
    </div>
  );
};

export default IngredientsImage;
