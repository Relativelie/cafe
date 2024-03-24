type IngredientsListProps = {
  ingredients: string[];
};

export const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div className='flex flex-col gap-2'>
      {ingredients.map((ingredient, index) => (
        <p className='h5' key={`ingredient-${index}`}>
          {ingredient}
        </p>
      ))}
    </div>
  );
};
