import { createContext, useContext } from "react";
import chef from "./recipe";
import recipe from "./recipe";
import review from "./review";

export const stores = {
  chef,
  recipe,
  review,
};

export const storesContext = createContext(stores);
export const useStores = () => useContext(storesContext);
