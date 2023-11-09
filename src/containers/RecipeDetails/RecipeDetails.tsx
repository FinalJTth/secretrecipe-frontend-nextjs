"use client";

import { useEffect, useRef, useState } from "react";
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
  const [willRender, setWillRender] = useState<Boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      await recipe.fetchRecipeById(id);
      setWillRender(true);
    };
    fetch();
  }, [id, recipe]);

  if (willRender == false) {
    return;
  }

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
