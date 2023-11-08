"use client";

import { useEffect, useState } from "react";
import { Box } from "../../common/components";
import API from "../../api/api.v1";
import {
  RecipeSection,
  ChefMetaSection,
  ReviewSectionList,
  RecipeSectionProps,
} from "../../components";
import { RecipeDetail, Review } from "@/utils/types";

type RecipeDetailsProps = {
  id: string;
};

const RecipeDetails = ({ id }: RecipeDetailsProps) => {
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

  const calAvgRating = (reviews: Review[]) => {
    const totalRatings = reviews.reduce(
      (sum, review) => sum + review.rating,
      0,
    );
    const averageRating = totalRatings / reviews.length;
    return Number(averageRating.toFixed(1));
  };

  const avgRating = calAvgRating(reviewsData);
  const totalReviews = reviewsData.length;
  return (
    <Box>
      <RecipeSection {...recipeData} />
      <ChefMetaSection {...chefData} />
      <ReviewSectionList
        reviews={reviewsData}
        avgRating={avgRating}
        totalReviews={totalReviews}
      />
    </Box>
  );
};

export { RecipeDetails };
