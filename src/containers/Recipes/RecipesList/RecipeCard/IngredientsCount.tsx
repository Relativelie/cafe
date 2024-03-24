import { useTheme } from 'theme/themeProvider';

type IngredientsCountProps = {
  count: number;
};

const IngredientsCount: React.FC<IngredientsCountProps> = ({ count }) => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.lightBrand }} className='w-fit px-2 rounded-lg'>
      <p className='text-center text-black'>{count} INGREDIENTS</p>
    </div>
  );
};

export default IngredientsCount;
