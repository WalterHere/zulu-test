const { useOn } = require("../3");

// I won't use lodash
const add = (operand1, operand2) => operand1 + operand2;
const multiply = (operand1, operand2) => operand1 * operand2;

const sum = (nums) => nums.reduce((total, num) => total + num, 0);

describe("Problem 3", () => {
  test("calculate sum of sums of `[10, 20, 30], [100, 200, 300]`", () => {
    expect(useOn(add, sum)([10, 20, 30], [100, 200, 300])).toBe(660);
  });

  test("calculate product of sums of `[10, 20, 30], [100, 200, 300]`", () => {
    expect(useOn(multiply, sum)([10, 20, 30], [100, 200, 300])).toBe(36000);
  });
});
