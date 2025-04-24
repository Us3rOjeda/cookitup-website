"use client"

import { useState } from 'react';
import { CormorantGaramond } from "../../../public/fonts/fonts";
import SearchBar from '../molecules/SearchBar';
import RenderRecipes from './RenderRecipes';

export default function Recipes () {
  const [recipesSearch, setRecipesSearch] = useState<string>('');

  return (
    <section id='search-recipes'
    className='h-full flex flex-col bg-[#192a1f]
    items-center gap-22 xl:pt-22'
    >
      <header className='flex flex-col gap-10 items-center'>
        <h1 className={`pt-[5.5rem] text-4xl md:text-5xl lg:text-7xl text-[#f9f4e9] text-center ${CormorantGaramond.className}`}>Search recipes by ingredients</h1>
        <SearchBar setRecipesSearch={setRecipesSearch} />
      </header>
      <RenderRecipes recipesSearch={recipesSearch} />
    </section>
  );
}
