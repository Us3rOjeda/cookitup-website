"use client"

import getRandomRecipes from "@/services/getRandomRecipes"
import { useEffect, useState } from "react"
import { RandomRecipe } from "../../lib/types/types"

function useFetchRandomRecipes () {
  const [randomRecipes, setRandomRecipes] = useState<RandomRecipe[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRandomRecipes()
    .then((data) => {setRandomRecipes(data);})
    .finally(() => setLoading(false));
  }, []);


  return { randomRecipes, loading };
}

export default useFetchRandomRecipes