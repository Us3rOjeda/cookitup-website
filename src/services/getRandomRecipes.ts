import { API_URL } from "@/lib/constants/API_URL";
import { RandomRecipe } from "@/lib/types/types";

const API_KEY = '479d8c50e3d74d3fbaf12d8c2e331d5a';

async function getRandomRecipes(): Promise<RandomRecipe[]> {
  try {
    const response = await fetch(`${API_URL}random?number=8&apiKey=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.recipes;
  } catch (error: unknown) {
    console.error('Ups! There was an error with the fetch operation:', error);
    return []; 
  }
}

export default getRandomRecipes