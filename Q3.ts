// Question No.3:
// Write a JavaScript function to find the first not repeated character.

// Answer:
function firstNonRepeatedCharacter(str: string) {
    // Create a map to store the frequency of each character
    const charFrequency = new Map();

    // Populate the map with character frequencies
    for (const char of str) {
        if (charFrequency.has(char)) {
            charFrequency.set(char, charFrequency.get(char) + 1);
        } else {
            charFrequency.set(char, 1);
        }
    }

    // Find the first character with a frequency of 1
    for (const char of str) {
        if (charFrequency.get(char) === 1) {
            return char;
        }
    }

    // Return null if no non-repeated character is found
    return null;
}

// Example usage:
const inputString = "Parizah";
const result = firstNonRepeatedCharacter(inputString);
if (result) {
    console.log(`The first non-repeated character is: ${result}`);
} else {
    console.log("There are no non-repeated characters.");
}