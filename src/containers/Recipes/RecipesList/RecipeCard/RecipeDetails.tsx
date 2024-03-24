import { useTheme } from 'theme/themeProvider';

type RecipeDetailsProps = {
  label: string;
  image: string;
  calories: number;
  totalWeight: number;
};

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ image, label, calories, totalWeight }) => {
  const { theme } = useTheme();

  return (
    <>
      <div className='flex justify-end'>
        <div
          style={{ borderColor: theme.colors.defaultInverse }}
          className='absolute w-32 h-32 flex items-center justify-center -top-[15%] left-2 border-4 rounded-full overflow-hidden'
        >
          <img src={image} alt={label} />
        </div>
        <div className='w-3/5 h-24 flex items-center justify-center'>
          <p style={{ color: theme.colors.default }} className='font-bold'>
            {Math.round((calories * 100) / totalWeight)}
            kcal/100g
          </p>
        </div>
      </div>
      <h5 style={{ color: theme.colors.default }} className='mt-1 text-center font-medium'>
        {label}
      </h5>
    </>
  );
};

export default RecipeDetails;
