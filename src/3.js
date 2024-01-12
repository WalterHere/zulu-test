// I won't use lodash
const add = (operand1, operand2) => operand1 + operand2;
const multiply = (operand1, operand2) => operand1 * operand2;

const sum = (nums) => nums.reduce((total, num) => total + num, 0);

const useOn = (originalFunc, transformFunc) => (arg1, arg2) => originalFunc(transformFunc(arg1), transformFunc(arg2));

let sumOfSums = useOn(add, sum);
console.log(sumOfSums([10, 20, 30], [100, 200, 300]));

let productOfSums = useOn(multiply, sum);
console.log(productOfSums([10, 20, 30], [100, 200, 300]));
