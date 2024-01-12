const { operationCount } = require("../5");

describe("Problem 5", () => {
  test("calculate the number of daily operations that flight performs for flight 'AA 3030 DFW JFK 01Mar18 29Mar18 ..34...'", () => {
    expect(operationCount("AA 3030 DFW JFK 01Mar18 29Mar18 ..34...")).toBe(9);
  });
});
