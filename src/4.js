/*
 * @param fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param acc The accumulator value.
 * @param list The list to be reduced
 */
const myreduce = function (fn, acc, list) {
  if (list.length === 0) {
    // The reduced value of an empty array is the initial accumulator value.
    return acc;
  } else {
    const restItems = list;
    const item = list.pop();
    return fn(myreduce(fn, acc, restItems), item);
  }
};

/*
 * @param xf The function to be called on every element of the input list
 * @param list The list to be transforned
 */
const mymap = function (xf, list) {
  return myreduce((total, item) => [...total, xf(item)], [], list);
};

/*
 * @param pred The predicate function that returns a boolean
 * @param list The list to be filtered
 */
const myfilter = function (pred, list) {
  return myreduce((total, item) => (pred(item) ? [...total, item] : total), [], list);
};

const result1 = myreduce((acc, elem) => acc + elem, 0, [1, 2]);
console.log(result1);

const result2 = mymap((item) => item * 2, [1, 2, 3]);
console.log(result2);

const result3 = myfilter((item) => item % 2 === 1, [1, 2, 3, 7, 0]);
console.log(result3);
