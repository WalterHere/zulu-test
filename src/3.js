const useOn = (originalFunc, transformFunc) => (arg1, arg2) => originalFunc(transformFunc(arg1), transformFunc(arg2));

module.exports = { useOn };
