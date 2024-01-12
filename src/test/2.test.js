const { powerSet } = require("../2");

describe("Problem 2", () => {
  test("check powerset for `[1, 2, 3]`", () => {
    expect(powerSet([1, 2, 3])).toEqual(expect.arrayContaining([[1], [1, 2], [2], [1, 3], [1, 2, 3], [2, 3], [3], []]));
  });
});
