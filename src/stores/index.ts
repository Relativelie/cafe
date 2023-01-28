import { Instance, types } from "mobx-state-tree";
import { RecipeStore } from "./recipes/store";

export const RootStore = types.model("RootStore", {
  recipeStore: RecipeStore,
});

export interface IRootStore extends Instance<typeof RootStore> {}
