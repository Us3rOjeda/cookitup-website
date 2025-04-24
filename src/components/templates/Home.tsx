"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CormorantGaramond } from "../../../public/fonts/fonts";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { xPercent: 100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    ).then(() => {
      gsap.fromTo(
        titleRef.current,
        { yPercent: 20, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      ).then(() => {
        gsap.fromTo(
          linkRef.current,
          { yPercent: 20, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          }
        );
      });
    });
  }, []);

  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 lg:h-full flex flex-col gap-10 2xl:gap-20 items-center justify-center relative">
        <h1
          ref={titleRef}
          className={`text-[#192a1f] text-9xl md:text-[200px] lg:text-9xl 2xl:leading-50 font-semibold 2xl:text-[240px] ${CormorantGaramond.className} select-none italic opacity-0`}
        >
          Cook <br /> It Up
        </h1>
        <Link
          href="#search-recipes"
          ref={linkRef}
          className="bg-[#e9deca] p-4 md:text-xl rounded-4xl text-[#0c140f] opacity-0"
        >
          Get Started
        </Link>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:h-full overflow-hidden relative">
        <Image
          ref={imageRef}
          src="/images/home.jpg"
          alt="Home Image of a delicious food"
          className="object-cover grayscale-50 opacity-0"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
