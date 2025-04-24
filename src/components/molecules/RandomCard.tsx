import { RandomCardProps } from "../../lib/types/types";
import MenuSVG from '../atoms/icons/MenuSVG';
import Link from "next/link";
import {CormorantGaramond} from "../../../public/fonts/fonts"
import "../../styles/card.css";

function RandomCard({
  id,
  image,
  title
}: RandomCardProps) {
  return (
    <li id={String(id)}>
      <article
        className="relative
        w-[21.875rem] h-[15.625rem] lg:w-[28.125rem]
        lg:h-[21.875rem] xl:w-[25rem] xl:h-[18.75rem]
        2xl:w-[400px] 2xl:h-[500px] rounded-4xl shadow-4xl
        overflow-hidden card__article"
      >
        <img src={image} alt={title} className="card__img object-cover" />
        <div className="card__shadow"></div>

        <div className="card__clip">
          <MenuSVG />
        </div>

        <div className="info">
          <div className="info__data">
            <h2 className={`${CormorantGaramond.className} text-[1.25rem] 
            lg:text-[2.375rem] md:mb-[0.5rem] font-semibold`}>
              {title}
            </h2>
          </div>

          <div className="flex flex-row justify-between w-full items-center">
            <Link
              href={`/recipe?recipe-id=${id}`}
              className="inline-flex bg-[#ff5e00] py-[0.5rem]
              px-[0.75rem] md:w-[8.5rem] md:h-[2.6875rem] rounded-4xl
              items-center justify-center cursor-pointer text-white 
              md:text-[1.125rem] font-semibold tracking-wide"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}

export default RandomCard;
