// Question No.2:
//  Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Answer:
function isPrime(number, divisor = 2) {
    // Base cases
    if (number <= 2) {
        return number === 2; // 2 is prime, 1 and less are not
    }
    if (number % divisor === 0) {
        return false; // If divisible by any number, it's not prime
    }
    if (divisor * divisor > number) {
        return true; // No divisors found up to the square root of num, so it's prime
    }
    // Recursive case: check next divisor
    return isPrime(number, divisor + 1);
}
// Example usage:
const number = 17;
console.log(`Is ${number} prime?`, isPrime(number));
const anotherNumber = 18;
console.log(`Is ${anotherNumber} prime?`, isPrime(anotherNumber));
export {};
