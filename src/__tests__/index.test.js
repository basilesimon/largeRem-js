import { largeRem } from '../index';

describe('large-rem-js', () => {
  it('should not change a set of integers already equal to 100', () => {
    expect(largeRem([20, 60, 20])).toEqual(
      expect.arrayContaining([20, 60, 20])
    );
  });

  it('should add and remove one in the array', () => {
    expect(largeRem([20.5, 60.3, 19.2])).toEqual(
      expect.arrayContaining([21, 60, 19])
    );
  });

  it('pick a random integer to increment if equality', () => {
    expect(largeRem([100 / 3, 100 / 3, 100 / 3])).toContain(34);
  });

  it('should break should sum of array not be equal to 100', () => {
    expect.assertions(1);
    try {
      largeRem([51, 51]);
    } catch (e) {
      expect(e.message).toEqual('Sum of the array values not equal to 100');
    }
  });
});
