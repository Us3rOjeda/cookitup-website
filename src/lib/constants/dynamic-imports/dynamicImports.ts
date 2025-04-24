import dynamic from 'next/dynamic';

export const RecipeDetails = dynamic(() => import('@/components/molecules/RecipeDetails'), { ssr: true });
export const RecipeDishTypes = dynamic(() => import('@/components/molecules/RecipeDishTypes'), { ssr: true });
export const RecipeIngredients = dynamic(() => import('@/components/molecules/RecipeIngredients'), { ssr: true });
export const RenderRandomRecipes = dynamic(() => import('@/components/organisms/RenderRandomRecipes'), {ssr: true});
export const Footer = dynamic(() => import('@/components/templates/Footer'), {ssr: true});
export const FooterContent = dynamic(() => import('@/components/atoms/FooterContent'), {ssr: true});
export const RecipeTemplate = dynamic(() => import('@/components/templates/RecipeTemplate'), {ssr: true});