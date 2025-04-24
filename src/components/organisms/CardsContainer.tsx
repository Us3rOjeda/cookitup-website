"use client"

import { useEffect, useRef } from 'react';
import { CardsProps } from '../../lib/types/types';
import Card from '../molecules/Card';
import { RenderRandomRecipes } from '@/lib/constants/dynamic-imports/dynamicImports';
import { CormorantGaramond } from "../../../public/fonts/fonts";

function CardsContainer({ recipes, totalRecipes, loading }: CardsProps) {
  const hasRecipes = recipes && recipes.length > 0;
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <ul className='relative w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
      {loading ? (
        <div className="flex justify-center items-center h-[400px] w-full col-span-full">
          <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#4d0300] text-center'>
            <span className='italic'>Looking for delicious recipes...</span>
          </p>
        </div>
      ) : hasRecipes ? (
        recipes
          .slice(0, totalRecipes)
          .map(({ id, image, title, usedIngredientCount, missedIngredientCount, likes }) => (
            <Card 
              key={id}
              id={id}  
              image={image} 
              title={title} 
              usedIngredientCount={usedIngredientCount} 
              missedIngredientCount={missedIngredientCount} 
              likes={likes}
            />
        ))
      ) : (
        isFirstRender.current ? (
          <>
            <RenderRandomRecipes />
            <div className='mb-12'></div>
          </>
          
        ) : (
          <div className="flex justify-center items-center h-[400px] w-full col-span-full">
            <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic text-[#4d0300] text-center'>
              <span className={`${CormorantGaramond.className} italic`}>No recipes were found with those ingredients.</span>
            </p>
          </div>
        )
      )}
    </ul>
  );
}

export default CardsContainer;
