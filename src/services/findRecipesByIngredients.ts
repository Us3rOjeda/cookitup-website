import getIngredients from "@/lib/helpers/getIngredients";
import { Recipe } from "../lib/types/types";
import { API_URL } from "@/lib/constants/API_URL";

const API_KEY = '479d8c50e3d74d3fbaf12d8c2e331d5a';

async function findRecipesByIngredients(search: string): Promise<Recipe[]> {
  const ingredients: string = getIngredients(search);

  try {
    const response = await fetch(`${API_URL}findByIngredients?ingredients=${ingredients}&number=100&ranking=1&ignorePantry=false&apiKey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Recipe[] = await response.json();
    return data;
  } catch (error: unknown) {
    console.error('Ups! There was an error with the fetch operation:', error);
    return []; 
  }
}

export default findRecipesByIngredients;
