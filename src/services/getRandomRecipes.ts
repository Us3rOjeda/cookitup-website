import { API_URL } from "@/lib/constants/API_URL";

const API_KEY = process.env.API_KEY;

async function getRandomRecipes() {
  try {
    const response = await fetch(`${API_URL}random?number=8&apiKey=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error('Ups! There was an error with the fetch operation:', error);
    return []; 
  }
}

export default getRandomRecipes