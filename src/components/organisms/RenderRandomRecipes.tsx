import useFetchRandomRecipes from '@/lib/hooks/useFetchRandomRecipes';
import RandomCard from '../molecules/RandomCard';

function RenderRandomRecipes () {
  const { randomRecipes } = useFetchRandomRecipes();

  return (
    <>
      {
        randomRecipes && randomRecipes.length > 0 && 
        randomRecipes.map(({ id, title, image }) => (
          <RandomCard 
            key={id} 
            id={id}
            title={title}
            image={image}
          />
        ))
      }
    </>
  )
}

export default RenderRandomRecipes