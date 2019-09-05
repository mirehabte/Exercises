//function that ordering a given word in alphabetical order
function alphabeticalOrder (givenWord){
    let orderedWord = [];
    for (let i=0; i < givenWord.length; i++){
     orderedWord.push(givenWord[i]);
     orderedWord.sort();
    }
   return orderedWord.join('');
  }
  //function invoking
console.log(alphabeticalOrder('dcba'));