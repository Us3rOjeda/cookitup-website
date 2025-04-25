const roundAmount = (amount: number): string | number => {
  return amount % 1 === 0 ? amount : amount.toFixed(1);
};

export default roundAmount;
