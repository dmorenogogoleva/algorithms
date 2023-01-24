function cashFunction(fn) {
  const cash = {};

  return function (n) {
    if (cash[n]) {
      console.log("get from cash", n, cash, cash[n]);
      return cash[n];
    }

    const result = fn(n);
    console.log("first time", n, result);
    cash[n] = result;
    return result;
  };
}

function factorial(n) {
  let result = 1;

  while (n != 1) {
    result *= n;
    n -= 1;
  }

  return result;
}

console.log(factorial(5));

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);
