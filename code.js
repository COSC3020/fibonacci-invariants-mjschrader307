function fibArray(n, arr = [0, 1]) {
  if (arr.length >= n) {
    return arr;
  }

  const next = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(next);

  return fibArray(n, arr);
}

function fib(n) {
  // Base cases
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  // Otherwise:
  return fibArray(n);
}