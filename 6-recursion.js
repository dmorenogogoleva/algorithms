function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

const factorialRes = factorial(5);
console.log("factorial:", factorialRes);

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const res = fibonacci(8);
console.log("fibonacci:", res);
