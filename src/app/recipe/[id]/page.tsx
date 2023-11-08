"use client";
import { RecipeDetails } from "@/containers";
import { Box } from "@/common/components";

const recipeDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Box>
      <RecipeDetails id={params.id} />
    </Box>
  );
};

export default recipeDetailsPage;
export { recipeDetailsPage };
