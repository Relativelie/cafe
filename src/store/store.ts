import { configureStore } from '@reduxjs/toolkit';
import { analystApi } from 'services/analyst';
import { recipesApi } from 'services/recipes';
import analystReducer from './analyst/analystSlice';
import recipesReducer from './recipes/recipesSlice';

export const store = configureStore({
  reducer: {
    analyst: analystReducer,
    recipes: recipesReducer,
    [analystApi.reducerPath]: analystApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getdefaultMiddleware) => {
    return (
      getdefaultMiddleware().concat(analystApi.middleware),
      getdefaultMiddleware().concat(recipesApi.middleware)
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
