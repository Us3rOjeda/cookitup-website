import { RecipeDishTypesProps } from '@/lib/types/types';
import {CormorantGaramond} from "../../../public/fonts/fonts";

function RecipeDishTypes ({dishTypes}: RecipeDishTypesProps) {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className="text-xl md:text-3xl tracking-wide text-[#ddded0]">Dish Type</h2>
      <ul className='grid grid-cols-2 xl:grid-cols-3  gap-4'>
        {dishTypes.map((dish) => (
          <li key={dish} className='bg-[#323f30] p-2 rounded-4xl px-4'>
            <p className={`text-sm text-[#b4b69b] ${CormorantGaramond.className} italic`}>
              {dish}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecipeDishTypes