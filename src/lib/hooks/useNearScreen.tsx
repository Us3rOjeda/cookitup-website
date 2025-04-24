"use client"

import { useEffect, useState, useRef } from "react"

function useNearScreen () {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const onChange: IntersectionObserverCallback = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "5px",
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []); 

  return { isNearScreen, elementRef };
}

export default useNearScreen