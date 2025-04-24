import { SumRecipesProps } from "../../lib/types/types";

function SumRecipesButton ({setCountRecipes}: SumRecipesProps) {
  const incrementRecipes = () => {
    setCountRecipes((prevCount) => {
      if (prevCount >= 100) return 100;
      return Math.min(prevCount + (prevCount === 96 ? 4 : 8), 100);
    });
  };

  return (
    <button className='p-2 md:p-4 tracking-wide
    text-2xl rounded-4xl bg-[#b82f27] font-semibold
  text-white border-[3px] border-[#ff5e00] shadow-xl
    hover:scale-95 transition-all ease-in-out duration-500 
    mb-12 lg:mb-22 cursor-pointer w-[250px] flex justify-center' 
    onClick={incrementRecipes}>
      More Recipes
    </button>
  )
}

export default SumRecipesButton;
