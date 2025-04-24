"use client";

import dynamic from "next/dynamic";
import useNearScreen from "../../lib/hooks/useNearScreen";

const Recipes = dynamic(() => import("@/components/templates/Recipes"), {
  ssr: false,
  loading: () => <div>Loading recipes...</div>,
});

function LazyRecipes() {
  const { isNearScreen, elementRef } = useNearScreen();

  return (
    <div id="lazy-recipes" ref={elementRef}>
      {isNearScreen ? <Recipes /> : null}
    </div>
  );
}

export default LazyRecipes;
