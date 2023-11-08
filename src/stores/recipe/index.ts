import { types, flow, cast, Instance, getSnapshot } from "mobx-state-tree";
import api from "../../api";

export interface IRecipe {
  id: string;
  description: string;
  name: string;
  step: Array<string>;
  ingredients: string;
  imageUrl: string;
  chefId: number;
}

export interface IRecipeMST extends Instance<typeof recipe> {}

const recipe = types.model("Recipe", {
  id: types.string,
  description: types.string,
  name: types.string,
  step: types.array(types.string),
  ingredients: types.string,
  imageUrl: types.string,
  chefId: types.number,
});

const recipeModel = types
  .model("RecipeModel", {
    recipes: types.array(recipe),
    currentRecipe: recipe,
  })
  .actions(self => {
    // Getter
    const getRecipes = (): Array<IRecipeMST> => {
      return self.recipes;
    };

    const getCurrentRecipe = (): IRecipeMST => {
      return self.currentRecipe;
    };

    // Setter
    const setRecipes = (recipes: Array<IRecipe>) => {
      self.recipes = cast(recipes);
    };

    const setCurrentRecipe = (recipe: IRecipe) => {
      self.currentRecipe = cast(recipe);
    };

    return { getRecipes, getCurrentRecipe, setRecipes, setCurrentRecipe };
  })
  .actions(self => {
    // API
    const fetchRecipeById = flow(function* fetchRecipeById(
      id: string,
    ): Generator<any, any, any> {
      return yield api
        .get(`/recipes/${id}`)
        .then((res: Record<string, any>) => {
          self.setCurrentRecipe({
            id: res.id,
            description: res.description,
            name: res.name,
            step: res.step,
            ingredients: res.ingredients,
            imageUrl: res.imageUrl,
            chefId: res.chefId,
          });
          return self.currentRecipe;
        });
    });

    const fetchPageRecipes = flow(function* fetchPageRecipes(
      pageSize: number,
      currentPage: number,
      text?: string,
    ): Generator<any, any, any> {
      return yield api
        .get(`/recipes?${pageSize}?${currentPage}${text ? `?${text}` : ``}`)
        .then((res: Record<string, any>) => {
          self.setRecipes(
            res.map((recipe: Record<string, any>) => {
              return {
                id: recipe.id,
                description: recipe.description,
                name: recipe.name,
                step: recipe.step,
                ingredients: recipe.ingredients,
                imageUrl: recipe.imageUrl,
                chefId: recipe.chefId,
              };
            }),
          );
          return self.getRecipes();
        });
    });

    const fetchAllRecipes = flow(function* fetchAllRecipes(
      id: string,
    ): Generator<any, any, any> {
      return yield api.get(`/recipes/all`).then((res: Record<string, any>) => {
        self.setRecipes(
          res.map((recipe: Record<string, any>) => {
            return {
              id: recipe.id,
              description: recipe.description,
              name: recipe.name,
              step: recipe.step,
              ingredients: recipe.ingredients,
              imageUrl: recipe.imageUrl,
              chefId: recipe.chefId,
            };
          }),
        );
        return self.getRecipes();
      });
    });

    return {
      fetchRecipeById,
      fetchPageRecipes,
      fetchAllRecipes,
    };
  })
  .create({
    recipes: [],
    currentRecipe: {
      id: "",
      description: "",
      name: "",
      step: [],
      ingredients: "",
      imageUrl: "",
      chefId: 0,
    },
  });

export default recipeModel;
