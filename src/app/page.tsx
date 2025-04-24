import Home from "@/components/templates/Home";
import LazyRecipes from "@/components/templates/LazyRecipes";
import { Footer } from "@/lib/constants/dynamic-imports/dynamicImports";

export default function Page() {
  return (
    <>
      <Home />
      <LazyRecipes />
      <Footer />
    </>
  );
}
