import test from 'ava';

const { erat } = require('../dist/erat-o');

test(`it shouldn't allow to calculate without the required parameter`, t => {
  const error = t.throws(() => erat(), Error);
  t.is(error.message, `The function takes one parameter for the calculations.`);
});

test(`it shouldn't allow to calculate without a number as the parameter`, t => {
  const error = t.throws(() => erat('10'), Error);
  t.is(
    error.message,
    `The function takes a natural number as the single parameter for the calculations.`
  );
});

test(`it shouldn't allow to calculate with a negative number greater than 2 as the parameter`, t => {
  const error = t.throws(() => erat(-10), Error);
  t.is(
    error.message,
    `The calculations require a non-negative (natural) number greater or equals than 2.`
  );
});

test(`it shouldn't allow to calculate without a natural number as the parameter`, t => {
  const error = t.throws(() => erat(10.2), Error);
  t.is(error.message, `The calculations requires a natural number.`);
});

test('it should return the prime numbers of 20', t => {
  const result = erat(20);
  t.deepEqual(result, [2, 3, 5, 7, 11, 13, 17, 19]);
});

test('it should return the prime numbers of 50', t => {
  const result = erat(50);
  t.deepEqual(result, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
});

test('it should return the prime numbers of 100', t => {
  const result = erat(100);
  t.deepEqual(result, [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97
  ]);
});
