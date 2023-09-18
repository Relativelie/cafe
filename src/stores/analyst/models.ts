import { Instance, types } from 'mobx-state-tree';

export const Ingredient = types.model({
  label: types.string,
  measure: types.string,
  enercKcal: types.number,
  fat: types.number,
  protein: types.number,
  carbs: types.number,
  mg: types.number,
  ca: types.number,
  vitaRae: types.number,
});

export type IngredientType = Instance<typeof Ingredient>;

export const TotalNutrients = types.model({
  enercKcal: types.string,
  vitaRae: types.string,
  protein: types.string,
  tocpha: types.string,
  chocdf: types.string,
  fat: types.string,
  fasat: types.string,
  fatrn: types.string,
  mg: types.string,
  ca: types.string,
});

export type TotalNutrientsType = Instance<typeof TotalNutrients>;
