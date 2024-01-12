function getOptimizedSubset(values, weights, maxWeight) {
  const densityList = values.map((value, index) => ({
    value,
    weight: weights[index],
    density: value / weights[index],
  }));

  let totalValue = 0,
    totalWeight = 0;

  densityList.sort((item1, item2) => item2.density - item1.density);

  densityList.forEach((item) => {
    if (totalWeight + item.weight <= maxWeight) {
      totalWeight += item.weight;
      totalValue += item.value;
    }
  });

  return { totalWeight, totalValue };
}

module.exports = { getOptimizedSubset };
