function decimalToFraction(decimal: number): string {
  if (Number.isInteger(decimal)) return decimal.toString();

  const tolerance = 1.0E-6;
  let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
  let b = decimal;
  do {
    const a = Math.floor(b);
    let temp = h1; h1 = a * h1 + h2; h2 = temp;
    temp = k1; k1 = a * k1 + k2; k2 = temp;
    b = 1 / (b - a);
  } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);

  return `${h1}/${k1}`;
}

export default decimalToFraction