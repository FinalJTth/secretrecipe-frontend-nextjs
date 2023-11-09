"use client";

import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Box } from "../../common/components";
import API from "../../api";
import {
  RecipeSection,
  ChefMetaSection,
  ReviewSectionList,
  RecipeSectionProps,
} from "../../components";
import { RecipeDetail, Review } from "@/utils/types";
import { useStores } from "../../stores";

type RecipeDetailsProps = {
  id: string;
};

const RecipeDetails = observer(({ id }: RecipeDetailsProps) => {
  const { recipe } = useStores();
  /*
  const [recipeDetail, setRecipeDetail] = useState<RecipeDetail>();

  useEffect(() => {
    const getRecipe = async () => {
      const apiClient = new API();
      const data = await apiClient.get(`/recipe/${id}`);
      setRecipeDetail(data);
    };
    getRecipe();
  }, [setRecipeDetail, id]);

  const recipe = recipeDetail?.recipe;
  const chefData = recipe?.chef ?? {};
  const reviewsData = recipe?.reviews ?? [];
  const {
    name,
    description,
    ingredients = "",
    step = [],
    imageUrl,
  } = recipe || {};
  const recipeData = {
    name,
    description,
    ingredients,
    step,
    imageUrl,
  };
  */
  useEffect(() => {
    const fetch = async () => {
      await recipe.fetchRecipeById(id);
    };
    fetch();
  }, [id, recipe, recipe.currentRecipe]);

  const reviews = recipe.currentRecipe.reviews;
  const chef = recipe.currentRecipe.chef;

  const calAvgRating = (reviews: Review[]) => {
    const totalRatings = reviews.reduce(
      (sum, review) => sum + review.rating,
      0,
    );
    const averageRating = totalRatings / reviews.length;
    return Number(averageRating.toFixed(1));
  };

  const avgRating = calAvgRating(reviews);
  const totalReviews = reviews.length;
  return (
    <Box>
      <RecipeSection {...recipe.currentRecipe} />
      <ChefMetaSection {...chef} />
      <ReviewSectionList
        reviews={reviews}
        avgRating={avgRating}
        totalReviews={totalReviews}
      />
    </Box>
  );
});

export { RecipeDetails };
