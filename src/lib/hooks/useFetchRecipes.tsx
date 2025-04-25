"use client"

import { Recipe } from "../../lib/types/types";
import { useState, useEffect } from "react";
import findRecipesByIngredients from '@/services/findRecipesByIngredients';

function useFetchRecipes(ingredients: string): { recipes: Recipe[] | null, loading: boolean } {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (ingredients === '') return;

    setLoading(true);
    findRecipesByIngredients(ingredients)
      .then((data) => {
        setRecipes(data);
      })
      .finally(() => setLoading(false));
  }, [ingredients]);

  return { recipes, loading };
}

export default useFetchRecipes;
