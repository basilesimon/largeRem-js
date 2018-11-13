import { largeRem } from "../index";

describe("large-rem-js", () => {
  it("should not change a set of integers already equal to 100", () => {
    expect(largeRem([20, 60, 20])).toEqual(
      expect.arrayContaining([20, 60, 20])
    );
  });
});
