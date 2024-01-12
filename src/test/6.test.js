const { getMinMaxTemperatureCity } = require("../6");

describe("Problem 6", () => {
  test("check if result has highest value and lowest value", async () => {
    const result = await getMinMaxTemperatureCity(["new york", "indiana", "chicago"]);

    expect(result).toEqual(
      expect.objectContaining({
        highest: expect.any(String),
        lowest: expect.any(String),
      })
    );
  });
});
