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
// Operators, Branching, Loops
//Q.3 Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const num1 = 5;
const num2 = 13;
const num3 = 7;
const num4 = 21;
const num5 = 48;
const add = num1 + num2 + num3 + num4 + num5;
console.log(add);
//Q.4 Write a program to take a number input from user and determine whether the number is odd or even.
function oddAndEven(n) {
  if (n % 2 === 0) {
    console.log(`Even Number`);
  } else console.log(`Odd Number`);
}
const oddEven = (n) => {
  return n % 2 === 0 ? console.log(`Even Number`) : console.log(`Odd Number`);
};

oddAndEven(18);
oddEven(27);
