import { PayloadAction } from "@reduxjs/toolkit";
import { RecipesRes } from "services/recipes/models";

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

export type State = {
  recipesData: RecipesRes | null;
  filter: Filter;
};

export type Reducers<T> = {
  onChangeFilter: (
    state: State,
    action: PayloadAction<{
      block: keyof Filter,
      value: T;
      blockItemKey?: string;
    }>
  ) => void;
};
