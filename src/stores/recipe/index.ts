import { types, flow, cast, Instance, getSnapshot } from "mobx-state-tree";
import { chef, IChef } from "../chef";
import { review, IReview } from "../review";
import api from "../../api";

export interface IRecipe {
  id: string;
  description: string;
  name: string;
  step: Array<string>;
  ingredients: string;
  imageUrl: string;
  chef: IChef;
  reviews: Array<IReview>;
}

export interface IRecipeMST extends Instance<typeof recipe> {}

export interface IRawRecipe {
  id: string;
  description: string;
  name: string;
  step: Array<string>;
  ingredients: string;
  imageUrl: string;
  chefId: number;
}

export interface IRawRecipeMST extends Instance<typeof rawRecipe> {}

export const recipe = types.model("Recipe", {
  id: types.string,
  description: types.string,
  name: types.string,
  step: types.array(types.string),
  ingredients: types.string,
  imageUrl: types.string,
  chef: chef,
  reviews: types.array(review),
});

export const rawRecipe = types.model("RawRecipe", {
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
    recipes: types.array(rawRecipe),
    currentRecipe: recipe,
  })
  .actions(self => {
    // Getter
    const getRecipes = (): Array<IRawRecipeMST> => {
      return self.recipes;
    };

    const getCurrentRecipe = (): IRecipeMST => {
      return self.currentRecipe;
    };

    // Setter
    const setRecipes = (recipes: Array<IRawRecipe>) => {
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
      return yield api.get(`/recipe/${id}`).then((res: Record<string, any>) => {
        const recipe = res.recipe;
        self.setCurrentRecipe({
          id: recipe.id,
          description: recipe.description,
          name: recipe.name,
          step: recipe.step,
          ingredients: recipe.ingredients,
          imageUrl: recipe.imageUrl,
          chef: recipe.chef,
          reviews: recipe.reviews,
        });
        return res;
      });
    });

    const fetchPageRecipes = flow(function* fetchPageRecipes(
      pageSize: number,
      currentPage: number,
      text?: string,
    ): Generator<any, any, any> {
      return yield api
        .get(
          `/recipes?page_size=${pageSize}&current_page=${currentPage}${
            text ? `&text=${text}` : ``
          }`,
        )
        .then((res: Record<string, any>) => {
          const recipes = res.recipes;
          self.setRecipes(
            recipes.map((recipe: Record<string, any>) => {
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
          return res;
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
        return res;
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
      chef: {
        id: "",
        name: "",
        description: "",
        imageUrl: "",
        phoneNumber: "",
        email: "",
        quote: "",
        experience: "",
      },
      reviews: [],
    },
  });

export default recipeModel;
