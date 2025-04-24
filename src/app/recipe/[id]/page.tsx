import { RecipeTemplate } from '@/lib/constants/dynamic-imports/dynamicImports';

function RecipePage({ params }: { params: { id: string } }) {
  return <RecipeTemplate id={params.id} />;
}

export default RecipePage