const getRandomArbitrary = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function largeRem(arr) {
  // Check that sum of the array is equal to 100
  // Throw error if it isn't
  const arraySum = arr.reduce((a, b) => a + b);
  if (arraySum != 100)
    throw new Error('Sum of the array values not equal to 100');

  // If the sum of our rounds() is 99, we need to add one;
  // if greater than 100, we need to substract one
  const arrayOfIntegers = arr.map(e => Math.round(e));
  const diffTo100 = 100 - arrayOfIntegers.reduce((a, b) => a + b);
  const moduli = arr.map(e => e % 1);

  let index;
  if (diffTo100 === 1) {
    index = moduli.indexOf(Math.max(...moduli));
  } else if (diffTo100 === -1) {
    index = moduli.indexOf(Math.min(...moduli));
  }

  // In case of equality (eg [33.33, 33.33, 33.33]) we need to randomly sample one
  const uniqueModuli = [...new Set(moduli)];
  if (uniqueModuli.length === 1) {
    index = getRandomArbitrary(0, arr.length - 1);
  }

  // Adjust array
  arrayOfIntegers[index] = arrayOfIntegers[index] + diffTo100;
  return arrayOfIntegers;
}

export { largeRem };
