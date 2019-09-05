//function to convert first latter of each word to uppercase
function firstLetterToUpperCase(givenWord){    
  let splited = givenWord.split(' ');
  let newArray = [];    
  for(let i = 0; i < splited.length; i++){
     newArray.push(splited[i].charAt(0).toUpperCase()+splited[i].slice(1));
  }
  return newArray.join(' ');
}
//function invoking
console.log(firstLetterToUpperCase("javascript class"));