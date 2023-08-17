function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function firstPalindrome(words) {
    for (const word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return '';
}

// Example usage
const wordsArray = ['hello', 'world', 'level', 'test'];
const palindrome = firstPalindrome(wordsArray);
console.log("First palindromic word:", palindrome);
