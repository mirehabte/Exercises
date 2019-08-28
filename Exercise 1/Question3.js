function addPy(givenWord){
let firstTwoLetter = givenWord.slice(0,2);
if (firstTwoLetter == 'Py'){
    return givenWord.trim();    
}
else {
    return ('Py'+givenWord.trim());       
}
}
console.log(addPy('  haburee'));