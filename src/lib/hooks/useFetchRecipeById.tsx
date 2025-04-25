"use client"

import { useEffect, useState } from 'react';
import { RecipeWithID } from "../types/types";
import findRecipesById from '@/services/findRecipesById';

function useFetchRecipeById(id: string | null): { recipe: RecipeWithID | null, loading: boolean } {
  const [recipe, setRecipe] = useState<RecipeWithID | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    findRecipesById(id)
      .then((data) => {
        setRecipe(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return { recipe, loading };
}

export default useFetchRecipeById;
