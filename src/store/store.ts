import { Middleware, configureStore } from '@reduxjs/toolkit';
import { analystApi } from 'services/analyst';
import { recipesApi } from 'services/recipes';
import analystReducer from './analyst/analystSlice';
import recipesReducer from './recipes/recipesSlice';
import { errorHandler } from 'services/errorHandler';

const rootReducer = {
  analyst: analystReducer,
  recipes: recipesReducer,
  [analystApi.reducerPath]: analystApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
};

const middleware: Middleware[] = [analystApi.middleware, recipesApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(errorHandler)
      .concat(middleware as ReturnType<typeof getDefaultMiddleware>),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
