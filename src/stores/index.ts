import { Instance, types } from "mobx-state-tree";
import { AuthStore } from "./auth";
import { RecipeStore } from "./recipes";

export const RootStore = types.model("RootStore", {
  recipeStore: RecipeStore,
  authStore: AuthStore,
});

export interface IRootStore extends Instance<typeof RootStore> {}
