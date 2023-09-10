import { NutritionItem } from './NutritionItem';

type IngredientItemProps = {};

export const IngredientItem: React.FC<IngredientItemProps> = () => {
  return (
    <div>
      <div className="flex justify-between px-4">
        <h4>label</h4>
        <p>measure</p>
      </div>
      <div className="px-12">
        <NutritionItem title="Calories" value="12" />
        <NutritionItem title="Carbs" value="12" />
        <NutritionItem title="Protein" value="12" />
        <NutritionItem title="Fat" value="12" />
      </div>
    </div>
  );
};
