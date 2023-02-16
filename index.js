//Q.1 Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivided(n, x, y) {
  return n % x === 0 && n % y === 0;
}
//Q.2 The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
function century(year) {
  if (year <= 0) {
    // negative to zero
    return `The is not zero and negative.`;
  } else if (year <= 100) {
    // 1 to 100
    return `The century is one and the (${year}) year`;
  } else if (year % 100 == 0) {
    // 101 to 200
    return `The century is second and the (${parseInt(year / 100)}) year`;
  } else {
    return `The century is third and the (${parseInt(year / 100)}) year`;
  }
}
const value = century(19);
console.log(value);
