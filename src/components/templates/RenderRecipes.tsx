"use client"

import CardsContainer from '../organisms/CardsContainer';
import useFetchRecipes from '@/lib/hooks/useFetchRecipes';
import SumRecipesButton from '../atoms/SumRecipesButton';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RenderRecipesProps } from "../../lib/types/types";

function RenderRecipes ({recipesSearch}: RenderRecipesProps) {
  const [countRecipes, setCountRecipes] = useState(8);
  const { recipes, loading } = useFetchRecipes(recipesSearch);

  const hasRecipes = recipes && recipes.length > 0;

  useEffect(() => {
    setCountRecipes(8);
  }, [recipesSearch]);

  return (
    <main className='flex items-center flex-col gap-22'>
      <CardsContainer recipes={recipes} totalRecipes={countRecipes} loading={loading}/>
      {hasRecipes ? (
        <div className='flex items-center lg:gap-12 flex-col lg:flex-row justify-between'>
          {
            countRecipes < 100 ? <SumRecipesButton setCountRecipes={setCountRecipes}/> : null
          }
          <Link href="#search-recipes" className='p-2 md:p-4 tracking-wide
          text-2xl rounded-4xl bg-[#b82f27] font-semibold
        text-white border-[3px] border-[#ff5e00] shadow-xl
          hover:scale-95 transition-all ease-in-out duration-500 
          mb-22 cursor-pointer w-[250px] flex justify-center'>
            Go Back To Top
          </Link>
        </div>
      ) : null}
    </main>
  )
}

export default RenderRecipes 
