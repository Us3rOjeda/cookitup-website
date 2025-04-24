function getIngredients(ingredients: string): string {
  return ingredients
    .toLowerCase()
    .trim()
    .replace(/,/g, '')
    .split(/\s+/)
    .join(',');
}

export default getIngredients