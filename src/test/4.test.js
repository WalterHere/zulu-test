const { myreduce, mymap, myfilter } = require("../4");

describe("Problem 4", () => {
  test("check reduce", () => {
    expect(myreduce((acc, elem) => acc + elem, 0, [1, 2, 3])).toBe(6);
  });

  test("check map", () => {
    expect(mymap((item) => item * 2, [1, 2, 3])).toEqual([2, 4, 6]);
  });

  test("check filter", () => {
    expect(myfilter((item) => item % 2 === 1, [1, 2, 3])).toEqual([1, 3]);
  });
});
