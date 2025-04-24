import { RecipeWithID } from "../lib/types/types";
import { API_URL } from "@/lib/constants/API_URL";

const API_KEY = process.env.API_KEY;

async function findRecipesById(id: string): Promise<RecipeWithID | null> {
  try {
    const response = await fetch(`${API_URL}${id}/information?apiKey=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: RecipeWithID = await response.json();
    return data;
  } catch (error) {
    console.error('Ups! There was an error with the fetch operation:', error);
    return null;
  }
}

export default findRecipesById; 