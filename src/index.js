export default arr => {
  // Check that sum of the array is equal to 100
  const arraySum = arr.reduce((a, b) => a + b);
  if (arraySum != 100) throw "Sum of the array values not equal to 100";

  // If the sum of our rounds() is 99, we need to add one;
  // if greater than 100, we need to substract one
  const diffTo100 = 100 - arraySum;
  const moduli = arr.map(e => e % 1);

  let index;
  if (diffTo100 === 1) {
    index = moduli.reduce((a, b) => Math.max(a, b));
  } else if (diffTo100 === -1) {
    index = moduli.reduce((a, b) => Math.min(a, b));
  }

  // In case of equality (eg [33.33, 33.33, 33.33]) we need to randomly sample one

  // Adjust array
  arr[index] = arr[index] + diffTo100;
  return arr;
};
