// Question No.1:
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Answer
function countVowels(string) {
    // Define a regular expression that matches all vowels (case-insensitive)
    const vowels = /[aeiou]/gi;
    // Use the match method to find all vowels in the string
    const matches = string.match(vowels);
    // If matches is not null, return the length of the matches array
    // Otherwise, return 0 (no vowels found)
    return matches ? matches.length : 0;
}
// Example usage:
const inputString = "This is an example string.";
const vowelCount = countVowels(inputString);
console.log(`The string "${inputString}" has ${vowelCount} vowels.`);
export {};
