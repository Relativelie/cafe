import IngredientEntity from './IngredientEntity';
import TotalNutrientEntity from './TotalNutrientEntity';

export type AnalystState = {
  ingredients: IngredientEntity[] | null;
  totalNutrient: TotalNutrientEntity | null;
  healthLabels: string[] | null;
};
