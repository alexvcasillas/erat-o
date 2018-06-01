const isInt = number => Number(number) === number && number % 1 === 0;
const isPrime = num => {
  const sqrt = Math.sqrt(num);
  for (let i = 2, s = sqrt; i <= s; i++) if (num % i === 0) return false;
  return num !== 1;
};

const erat = number => {
  if (typeof number === 'undefined') {
    throw new Error(`The function takes one parameter for the calculations.`);
  }
  if (typeof number !== 'number') {
    throw new Error(
      `The function takes a natural number as the single parameter for the calculations.`
    );
  }
  if (number < 2) {
    throw new Error(
      `The calculations require a non-negative (natural) number greater or equals than 2.`
    );
  }
  if (!isInt(number)) {
    throw new Error(`The calculations requires a natural number.`);
  }

  let primes = [];

  function f(n) {
    for (let i = 2; i <= number; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  }

  return f(number);
};

module.exports = { erat };
