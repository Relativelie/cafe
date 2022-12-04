import { getRequest } from "../methods";

export const getRecipes = (filters: object) => {
return getRequest(filters).then(res => {
  return res.data
});
};
