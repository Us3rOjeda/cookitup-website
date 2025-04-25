"use client";

import React from "react";
import { CardProps } from "../../lib/types/types";
import HeartSVG from '../atoms/icons/HeartSVG';
import MenuSVG from '../atoms/icons/MenuSVG';
import Link from "next/link";
import Image from "next/image";
import {CormorantGaramond} from "../../../public/fonts/fonts"
import "../../styles/card.css";

function Card({
  id,
  image,
  title,
  usedIngredientCount,
  missedIngredientCount,
  likes
}: CardProps) {
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
            <div className="flex flex-col gap-2 mt-3 md:mt-0">
              <p className="text-[1rem] font-bold md:text-xl text-black tracking-wide">
                Ingredients:
              </p>
              <div className="flex gap-4">
                <p className="text-[1rem] py-1 px-4 bg-[#51ff00] rounded-4xl">
                  You have {usedIngredientCount}
                </p>
                <p className="text-[1rem] py-1 px-4 bg-[#ff0000] rounded-4xl">
                  You miss {missedIngredientCount}
                </p>
              </div>
            </div>
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
            <div className="flex gap-2 items-center">
              <HeartSVG />
              <p className="text-xl">{likes}</p>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default React.memo(Card);  
