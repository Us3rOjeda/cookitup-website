import { RecipeIngredientsProps } from "@/lib/types/types";
import {CormorantGaramond} from "../../../public/fonts/fonts";
import decimalToFraction from "@/lib/helpers/decimalToFraction";

function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl md:text-3xl tracking-wide text-[#ddded0]">Ingredients</h2>
      <ul className="flex flex-col">
        {ingredients.slice(0, 6).map((ingredient) => (
          <li key={`${ingredient.id}_${ingredient.unit}_${ingredient.name}`} className="">
            <p className="text-[#bbbba9] text-md md:text-xl">
            <span className={`text-lg md:text-xl xl:text-4xl ${CormorantGaramond.className}`}>
              {decimalToFraction(ingredient.amount)}
            </span> {ingredient.unit} of {ingredient.name}.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecipeIngredients