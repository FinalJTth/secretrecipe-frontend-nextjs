import { createContext, useContext } from "react";
import chefModel from "./chef";
import recipeModel from "./recipe";
import reviewModel from "./review";

export const stores = {
  chef: chefModel,
  recipe: recipeModel,
  review: reviewModel,
};

export const storesContext = createContext(stores);
export const useStores = () => useContext(storesContext);
