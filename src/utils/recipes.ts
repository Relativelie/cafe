import RecipeEntity from 'store/recipes/models/RecipeEntity';

export const getActiveFilters = (filters: { [x: string]: boolean }, recipeType: string): string => {
  return Object.keys(filters)
    .map((item) => filters[item] && item)
    .filter(Boolean)
    .map((key) => `${recipeType}=${key}`)
    .join('&');
};

export const convertRecipeResponse = (response: any) => {
  if (!response.hits.length) {
    return { recipes: null, nextPage: null };
  }

  const recipes = response.hits.map((hit: any) => {
    const recipe = RecipeEntity.create(hit.recipe);
    return { ...recipe };
  });
  const nextPage = response._links.next ? response._links.next.href : null;
  return { recipes, nextPage };
};
