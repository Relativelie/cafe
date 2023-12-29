import clsx from 'clsx';
import RecipeEntity from 'store/recipes/models/RecipeEntity';
import { useTheme } from 'theme/themeProvider';

const fittedLabels = (labels: string[]) => {
  const fittedLabelCount = 3;
  return labels.length > fittedLabelCount ? labels.splice(0, fittedLabelCount) : labels;
};

type RecipeCardProps = {
  recipe: RecipeEntity;
  onClick: (id: string) => void;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const { theme } = useTheme();

  const { image, label, dietLabels, cuisineType, calories, ingredientLines, totalWeight } = recipe;

  return (
    <div
      onClick={() => onClick(recipe.uri)}
      style={{ backgroundColor: theme.colors.defaultInverse }}
      className={clsx(
        theme.hoverBorders.success,
        'min-h-[200px] w-[280px] relative flex flex-col justify-between pb-2 px-2 rounded-3xl border-4 border-transparent cursor-pointer hover:border-4 hover:scale-105 duration-200',
      )}
    >
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

      <div className='flex flex-col items-center mt-2'>
        <div className='flex flex-wrap gap-x-2 '>
          {fittedLabels(dietLabels).map((item) => (
            <p key={`${item}-diet-label`} style={{ color: theme.colors.default }}>
              #{item.toLowerCase()}
            </p>
          ))}
          {fittedLabels(cuisineType).map((item) => (
            <p key={`${item}-cousine-label`} style={{ color: theme.colors.default }}>
              #{item}
            </p>
          ))}
        </div>
        <div style={{ backgroundColor: theme.colors.lightBrand }} className='w-fit px-2 rounded-lg'>
          <p className='text-center text-black'>{ingredientLines.length} INGREDIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
