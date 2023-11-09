"use client";

import { RecipeDetails } from "../../../containers";
import { Box } from "../../../common/components";

const RecipeDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Box
      maxW={{ sm: "2xl", md: "3xl", lg: "4xl" }}
      mx={{ sm: "auto" }}
      w={{ sm: "full" }}
    >
      <RecipeDetails id={params.id} />
    </Box>
  );
};

export default RecipeDetailsPage;
