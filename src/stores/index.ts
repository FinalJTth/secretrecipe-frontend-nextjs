import { createContext, useContext } from "react";
import recipe from "./recipe";

export const stores = {
  recipe: recipe,
};

export const storesContext = createContext(stores);
export const useStores = () => useContext(storesContext);
