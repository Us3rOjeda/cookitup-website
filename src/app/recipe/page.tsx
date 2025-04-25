"use client"

import ArrowSVG from "@/components/atoms/icons/ArrowSVG";
import useFetchRecipeById from "@/lib/hooks/useFetchRecipeById";
import {CormorantGaramond} from "../../../public/fonts/fonts";
import cutSummaryAfterThirdPeriod from "@/lib/helpers/cutSummaryAfterThirdPeriod";
import Link from "next/link";
import { RecipeDetails, RecipeDishTypes, RecipeIngredients} from "@/lib/constants/dynamic-imports/dynamicImports"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RecipePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('recipe-id');

  const { recipe, loading } = useFetchRecipeById(id);

  if (!id) {
    return <div className={`${CormorantGaramond.className} w-full h-screen flex items-center justify-center bg-[#192a1f] text-7xl text-center text-red-500`}>
      Error: No recipeId provided
    </div>;
  }

  if (loading) {
    return <div className={`${CormorantGaramond.className} w-full h-screen flex items-center justify-center bg-[#192a1f] text-7xl text-[#ddded0] text-center italic`}>
      Loading...
    </div>;
  }

  if (!recipe) {
    return <div className={`${CormorantGaramond.className} w-full h-screen flex items-center justify-center bg-[#192a1f] text-7xl text-center text-red-500`}>
      Recipe not found
    </div>;
  }

  const shortenedSummary = cutSummaryAfterThirdPeriod(recipe.summary);

  return (
    <section className="bg-[#192a1f] h-full flex flex-col 2xl:w-full 2xl:h-screen 2xl:gap-10">
      <div className="m-8 flex flex-col gap-10 2xl:flex-row 2xl:m-0">
        {/* Top Left */}
        <div
          id="top-left"
          className="flex flex-col gap-10 2xl:ml-24 2xl:mt-20 2xl:w-[35%] 2xl:h-[50vh]"
        >
          <h1
            className={`text-[#ddded0] ${CormorantGaramond.className} text-4xl md:text-6xl 2xl:text-7xl leading-[1.20]`}
          >
            {recipe.title}
          </h1>
          <RecipeDetails
            servings={recipe.servings}
            preparationMinutes={recipe.preparationMinutes}
            readyInMinutes={recipe.readyInMinutes}
            healthScore={recipe.healthScore}
            spoonacularScore={recipe.spoonacularScore}
          />
          <div
            className={`${CormorantGaramond.className} text-2xl flex flex-row gap-2 items-center text-[#ddded0]`}
          >
            <p className={`${CormorantGaramond.className}`}>Source: </p>
            <a
              href={recipe.sourceUrl}
              className="flex items-center text-center justify-center italic text-[#ffffff] text-2xl"
              target="_blank"
            >
              {recipe.sourceName}
              <ArrowSVG />
            </a>
          </div>
        </div>

        {/* Top Right */}
        <div className="2xl:w-[60%] 2xl:h-[60vh]">
          <Image
            id="top-right"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-4xl 2xl:rounded-bl-4xl 2xl:rounded-none"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
      </div>

      <div className="flex flex-col 2xl:flex-row gap-10 m-8 2xl:m-0">
        {/* Bottom Left */}
        <div
          id="bottom-left"
          className="flex flex-col gap-5 2xl:ml-24 2xl:w-[35%]"
        >
          <h2 className="text-xl md:text-3xl tracking-wide text-[#ddded0]">Summary</h2>
          <p
            className="text-md md:text-2xl 2xl:text-xl text-[#bbbba9] w-[95%]"
            dangerouslySetInnerHTML={{ __html: shortenedSummary }}
          />
          <Link
            href="/"
            className={`hidden w-fit h-fit 2xl:block text-2xl text-[#ddded0] 
            ${CormorantGaramond.className} transition-all duration-500 ease-in-out hover:scale-105`}
          >
            <span className="2xl:text-3xl">&lt;- </span>Go back to Search
          </Link>
        </div>

        {/* Bottom Right */}
        <div
          id="bottom-right"
          className="2xl:w-[60%] flex flex-col gap-4"
        >
          <div className="flex flex-col gap-4 lg:flex-row 2xl:gap-10 h-full">
            <RecipeIngredients ingredients={recipe.extendedIngredients} />
            <span className="w-0.5 h-[100%] bg-[#323f30] rounded-4xl"></span>
            <RecipeDishTypes dishTypes={recipe.dishTypes} />
          </div>
          <Link
            href="/"
            className={`pb-10 2xl:hidden text-center text-xl 
            text-[#ddded0] ${CormorantGaramond.className} 
            transition-all duration-500 ease-in-out hover:scale-105`}
          >
            <span className="2xl:text-3xl">&lt;- </span>Go back to Search
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SuspendedRecipePage() {
  return (
    <Suspense 
    fallback={
      <div className={`${CormorantGaramond.className} w-full h-screen flex items-center justify-center bg-[#192a1f] text-7xl text-[#ddded0] text-center italic`}>
        Loading...
      </div>}>
      <RecipePage />
    </Suspense>
  );
}

