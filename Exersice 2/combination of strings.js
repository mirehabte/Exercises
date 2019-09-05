//function for a possible combination of strings
function combinationOfString(givenWord) {
    let result = [];
    let f = function(preSliced, givenWord) {
      for (let i = 0; i < givenWord.length; i++) {
        result.push(preSliced + givenWord[i]);
        f(preSliced + givenWord[i], givenWord.slice(i + 1));
      }
    }
    f('', givenWord);
    return result;
  }
  //function invoking
  console.log(combinationOfString('dog'));