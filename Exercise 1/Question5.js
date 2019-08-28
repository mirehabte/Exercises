function multipleOfThreeOrSeven(number){
    if ((number % 3) == 0 || (number % 7) == 0){
         return 'True';
    } 
    else return 'False';
}

console.log(multipleOfThreeOrSeven(21));