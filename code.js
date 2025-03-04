function computeFib(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n == 1) return 1;

    return computeFib(n - 2) + computeFib(n - 1);
}

function fib(n) {
  let return_arr = [];

  for (let i = 0; i < n + 1; i++) {
    return_arr.push(computeFib(i));
  }

  return fib(n);
}