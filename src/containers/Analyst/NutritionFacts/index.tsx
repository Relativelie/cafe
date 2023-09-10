import { IngredientItem } from './IngredientItem';
import { NutritionItem } from './NutritionItem';

export const NutritionFacts = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 p-4 w-2/3 rounded-xl border">
        <h2 className="">Nutrition Facts</h2>
        <hr />
        <h3>Total Nutrients</h3>
        <NutritionItem title="Vitamin A, RAE" value="12" />
        <NutritionItem title="Protein" value="12" />
        <NutritionItem title="Vitamin E (alpha-tocopherol)" value="12" />
        <NutritionItem title="Carbs" value="12" />
        <NutritionItem title="Magnesium, Mg" value="12" />
        <NutritionItem title="Calcium, Ca" value="12" />

        <h3>Ingredients Nutrients</h3>

        <IngredientItem />
      </div>
    </div>
  );
};
