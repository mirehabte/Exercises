function removeChar(givenWord , index){
let toBeRemoved = givenWord.charAt(index);
let newWord = givenWord.replace(toBeRemoved,'');
return newWord.trim();
}
console.log(removeChar('mire',3));