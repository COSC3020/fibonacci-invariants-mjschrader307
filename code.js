function fib(n) {
  // Base cases
  if (n < 0) return 0;
  if (n == 1) return 1;
  if (n == 0) return 0;

  return fib(n - 2) + fib(n - 1);
}
