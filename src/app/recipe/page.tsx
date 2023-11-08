"use client";

import {
  ReviewSectionList,
  ReviewSectionProps,
  ChefMetaSection,
  RecipeSection,
} from "../../components";
import { Box } from "../../common/components";
import { RecipeDetails } from "@/containers";

const TestPage = () => {
  const mockData = [
    {
      rating: 4,
      reviewerName: "Ian",
      description: "Decent recipe, worth trying.",
    },
    {
      rating: 3,
      reviewerName: "Ian",
      description: "Decent recipe, worth trying.",
    },
    {
      rating: 5,
      reviewerName: "Ian",
      description: "Decent recipe, worth trying.",
    },
    {
      rating: 1,
      reviewerName: "Ian",
      description: "Decent recipe, worth trying.",
    },
  ] as ReviewSectionProps[];

  const chefData = {
    name: "John Smith",
    description: "Exquisite cuisine with a touch of creativity.",
    imageUrl: "https://example.com/chef1.jpg",
    quote: "Cooking is an art, and I'm the artist.",
  };

  const recipeData = {
    description: "Classic Spaghetti Bolognese",
    name: "Spaghetti Bolognese",
    step: [
      "Boil water and cook spaghetti as per package instructions.",
      "In a pan, brown ground beef with onions and garlic.",
      "Add tomato sauce, Italian herbs, and simmer.",
      "Serve the sauce over cooked spaghetti and garnish with parmesan cheese.",
    ],
    ingredients:
      "8 oz spaghetti, 1 lb ground beef, 1 onion, 2 cloves garlic, 2 cups tomato sauce, 1 tsp Italian herbs, 1/4 cup parmesan cheese",
    imageUrl: "https://example.com/spaghetti-bolognese.jpg",
  };
  return (
    <Box>
      <RecipeDetails />
    </Box>
  );
};

export default TestPage;
