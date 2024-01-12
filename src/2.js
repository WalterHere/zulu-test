const powerSet = (arr) => {
  if (arr.length === 0) {
    // The power set of an empty array is the array that contains only the empty array
    return [[]];
  } else {
    const [firstNum, ...restNums] = arr;
    subsets = powerSet(restNums);
    subsetWithFirstNum = subsets.map((subset) => [firstNum, ...subset]);
    return [...subsets, ...subsetWithFirstNum];
  }
};

module.exports = { powerSet };
