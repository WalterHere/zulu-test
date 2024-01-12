const { oddSumForFib } = require("../1");

describe("Problem 1", () => {
  test("calculate sum of all odd fibonacci numbers lesser than 10", () => {
    expect(oddSumForFib(10)).toBe(10);
  });

  test("calculate sum of all odd fibonacci numbers lesser than 100", () => {
    expect(oddSumForFib(100)).toBe(188);
  });
});
