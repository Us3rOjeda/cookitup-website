"use client"

import ClockSVG from "@/components/atoms/icons/ClockSVG";
import GroupSVG from "@/components/atoms/icons/GroupSVG";
import HeartSVG from "@/components/atoms/icons/HeartSVG";
import VerifiedSVG from "@/components/atoms/icons/VerifiedSVG";
import { RecipeDetailsProps } from '@/lib/types/types';

function RecipeDetails({ 
  servings, 
  preparationMinutes, 
  readyInMinutes, 
  healthScore, 
  spoonacularScore 
}: RecipeDetailsProps) {
  return (
    <section className='flex gap-2 md:gap-6 items-center'>
      {/* SERVINGS */}
      <div className='flex flex-col items-center gap-1'>
        <div className='flex gap-2 items-center'>
          <GroupSVG />
          <p className='md:text-2xl font-semibold text-[#b8b7a2]'>{servings}</p>
        </div>
        <p className='text-[#B0B0A1] text-sm'>Servings</p>
      </div>
      
      <span className='w-0.5 h-10 bg-[#323f30] rounded-4xl'></span>

      {/* PREPTIME */}
      <div className='hidden md:flex flex-col items-center gap-1'>
        <div className='flex gap-2 items-center'>
          <ClockSVG />
          <p className='md:text-2xl font-semibold text-[#b8b7a2]'>{preparationMinutes ? `${preparationMinutes}` : "Ø"}</p>
        </div>
        <p className='text-[#B0B0A1] text-sm'>Preptime</p>
      </div>
      
      <span className='hidden md:flex w-0.5 h-10 bg-[#323f30] rounded-4xl'></span>

      {/* TOTAL TIME */}
      <div className='flex flex-col items-center gap-1'>
        <div className='flex gap-2 items-center'>
          <ClockSVG />
          <p className='md:text-2xl font-semibold text-[#b8b7a2]'>{readyInMinutes}</p>
        </div>
        <p className='text-[#B0B0A1] text-sm'>Total time</p>
      </div>

      <span className='w-0.5 h-10 bg-[#323f30] rounded-4xl'></span>

      {/* HEALTH SCORE */}
      <div className='flex flex-col items-center gap-1'>
        <div className='flex gap-2 items-center'>
          <HeartSVG />
          <p className='md:text-2xl font-semibold text-[#E0825F]'>{healthScore}</p>
        </div>
        <p className='text-[#bbbba9] text-sm'>Health score</p>
      </div>

      <span className='hidden md:flex w-0.5 h-10 bg-[#323f30] rounded-4xl'></span>

      {/* SPOONACULAR */}
      <div className='hidden md:flex flex-col items-center gap-1'>
        <div className='flex gap-2 items-center'>
          <VerifiedSVG />
          <p className='md:text-2xl font-semibold text-[#6B9E83]'>{spoonacularScore.toFixed(1)}</p>
        </div>
        <p className='text-[#B0B0A1] text-sm'>Spoonacular</p>
      </div>
    </section>
  )
}

export default RecipeDetails;
