"use client"

import React, { useState } from "react";
import SearchSVG from '../atoms/icons/SearchSVG';
import { SearchBarProps } from "../../lib/types/types";;
import useFocus from "@/lib/hooks/useFocus";

function SearchBar({ setRecipesSearch }: SearchBarProps) {
  const { isFocus, handleFocus, handleBlur } = useFocus();
  const [searchInput, setSearchInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setRecipesSearch(searchInput);
  };

  return (
    <form
    onSubmit={handleSubmit}
    className={`bg-white w-[350px] md:w-[450px]
    lg:w-[500px] xl:w-[600px] h-14 rounded-4xl p-6 shadow-sm
    ${isFocus ? 'border-[#ff5e00]' : 'border-[#d6c2a4]'}
    border-[1px] hover:shadow-md transition-all ease-in-out
    duration-400 relative flex`}
    >
      <SearchSVG color={`${isFocus ? '#ff5e00' : '#d6c2a4'}`} />
      <input
        type="text"
        placeholder="e.g. cheese, eggs, tomatoes"
        className='absolute bottom-0 w-[250px] xl:w-[527px] h-13 left-18 rounded-r-4xl focus:outline-none'
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchInput}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default React.memo(SearchBar);