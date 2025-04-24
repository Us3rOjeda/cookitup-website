"use client"

import { useState } from 'react';

function useFocus() {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  return {
    isFocus,
    handleFocus,
    handleBlur
  };
}

export default useFocus;