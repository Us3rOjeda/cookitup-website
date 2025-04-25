export interface Ingredient {
  id: number;
  amount: number;
  unit: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: string[];
  image: string;
};

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: Ingredient[];
  usedIngredients: Ingredient[];
  unusedIngredients: Ingredient[];
  likes: number;
};

export interface RecipeWithID {
  id: number;
  image: string;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: number | null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
};


export interface Ingredient {
  id: number;
  amount: number;
  unit: string;
  name: string;
  original: string;
};

export interface RandomRecipe {
  id: number;
  image: string;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string | null;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: number | null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
};

export interface RecipeCardIdProps {
  recipe: Recipe;
};

export interface SearchBarProps {
  setRecipesSearch: React.Dispatch<React.SetStateAction<string>>;
};

export interface CardsProps {
  recipes: Recipe[] | null;
  totalRecipes: number;
  loading: boolean;
};

export interface useFetchRecipesProps {
  ingredientsNormalized: string;
};

export interface SumRecipesProps {
  setCountRecipes: React.Dispatch<React.SetStateAction<number>>;
};

export interface RenderRecipesProps {
  recipesSearch: string;
};

export interface CardProps {
  id: number;
  image: string;
  title: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  likes: number;
};

export interface RecipeDetailsProps {
  servings: number;
  preparationMinutes: number | null;
  readyInMinutes: number;
  healthScore: number;
  spoonacularScore: number;
};

export interface RecipeIngredientsProps {
  ingredients: Ingredient[];
};

export interface RecipeDishTypesProps {
  dishTypes: string[];
};

export interface RandomCardProps {
  id: number;
  image: string;
  title: string;
};

export interface SumRecipesProps {
  setCountRecipes: React.Dispatch<React.SetStateAction<number>>;
};