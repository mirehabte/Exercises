// Program to reverse a number
function reverseNumber(number) {
    let reversed = 0,remainder;
    while (number) {
    remainder = number % 10;
    number = Math.floor(number / 10);
    reversed = reversed * 10;
    reversed = reversed + remainder;
    }
    return reversed;
    }
    //function invoking
    console.log(reverseNumber(679)); 
