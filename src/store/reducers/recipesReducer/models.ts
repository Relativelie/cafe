import { PayloadAction } from "@reduxjs/toolkit";

export enum DietEnum {
  balanced = "balanced",
  highFiber = "high-fiber",
  highProtein = "high-protein",
  lowCarb = "low-carb",
  lowFat = "low-fat",
  lowSodium = "low-sodium",
}

export type Filter = {
  q: string;
  diet: {
    [DietEnum.balanced]: boolean;
    [DietEnum.highFiber]: boolean;
    [DietEnum.highProtein]: boolean;
    [DietEnum.lowCarb]: boolean;
    [DietEnum.lowFat]: boolean;
    [DietEnum.lowSodium]: boolean;
  };
};

export type Recipes = {
  recipes: [
    {
      recipe: Recipe;
      _links: {
        self: {
          href: string;
          title: string;
        };
        next: {
          href: string;
          title: string;
        };
      };
    }
  ];
  next?: string;
};

export type Recipe = {
  totalTime: string;
  uri: string;
  label: string;
  image: string;
  images: {
    THUMBNAIL: {
      url: string;
      width: number;
      height: number;
    };
    SMALL: {
      url: string;
      width: number;
      height: number;
    };
    REGULAR: {
      url: string;
      width: number;
      height: number;
    };
    LARGE: {
      url: string;
      width: number;
      height: number;
    };
  };
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: [string];
  healthLabels: [string];
  cautions: [string];
  ingredientLines: [string];
  ingredients: [
    {
      text: string;
      quantity: number;
      measure: string;
      food: string;
      weight: number;
      foodId: string;
    }
  ];
  calories: number;
  glycemicIndex: number;
  totalCO2Emissions: number;
  co2EmissionsClass: "A+";
  totalWeight: number;
  cuisineType: [string];
  mealType: [string];
  dishType: [string];
  instructions: [string];
  tags: [string];
  externalId: string;
  totalNutrients: {};
  totalDaily: {};
  digest: [
    {
      label: string;
      tag: string;
      schemaOrgTag: string;
      total: number;
      hasRDI: true;
      daily: number;
      unit: string;
      sub: {};
    }
  ];
};

export type State = {
  recipesData: Recipes | null;
  filter: Filter;
};

export type Reducers<T> = {
  onChangeFilter: (
    state: State,
    action: PayloadAction<{
      block: keyof Filter;
      value: T;
      blockItemKey?: string;
    }>
  ) => void;
};
