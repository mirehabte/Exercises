// Program checks if a string is palindrome or not
function isPalindrome(givenWord) {
    let wordLength = givenWord.length;
    let middle = Math.floor(wordLength/2);
    for ( let i = 0; i < middle; i++ ) {
        if (givenWord[i] !== givenWord[wordLength - 1 - i]) {
            return 'Not Palindrome';
        }
    }
    return 'Palindrome';
}
//function invoking
console.log(isPalindrome('nooni'));