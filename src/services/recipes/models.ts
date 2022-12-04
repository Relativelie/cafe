export type RecipesRes = {
  from: number;
  to: number;
  count: number;
  _links: any;
  hits: [{recipe: Recipe, _links: any}];
};

export type Recipe = {
    calories: number;
    cuisineType: "string";
    label: string
}