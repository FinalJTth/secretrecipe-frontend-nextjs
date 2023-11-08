export type Chef = {
  description: string;
  email: string;
  experience: string;
  id: string;
  imageUrl: string;
  name: string;
  phoneNumber: string;
  quote: string;
};

export type Review = {
  description: string;
  id: string;
  rating: number;
  reviewerName: string;
};

export type Recipe = {
  chef: Chef;
  reviews: Review[];
  id: string;
  name: string;
  description: string;
  ingredients: string;
  step: string[];
  imageUrl: string;
};

export type RecipeDetail = {
  recipe: Recipe;
};
