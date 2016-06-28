///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(num1, num2){
  return num1+num2;
}
console.assert(sum(1,2)===3);//t
console.assert(sum(1,2)===2);//f


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(num1, num2, num3) {
  return (num1+num2+num3)/3;
}
console.assert(avg(1,2,3)===2);//t
console.assert(avg(1,2,3)===1);//f


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(string) {
  return string.length;
}
console.assert(getLength('hello')===5);//t
console.assert(getLength('hello')===7);//f


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(num1, num2) {
  if(num1>num2){
    return true;
  } else {
    return false;
  }
}
console.assert(greaterThan(1,2));//f
console.assert(greaterThan(2,1));//t
console.assert(greaterThan(4,2));//t


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
  return 'Hello, '+name+'!';
}
console.assert(greet('Christian') === 'Hello, Christian!');//t
console.assert(greet('Christian') === 'Hello, Jimbo!');//f

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib(word1, word2, word3, word4) {
  sentence = 'I have a degree in '+word1+', but my real specialty is '+word2+' with some minor experience in '+word3+'. Do not even ask me to fix your '+word4+'.';
  return sentence;
}
console.assert(madlib('flerm', 'blah', 'blerg', 'flig') === 'I have a degree in flerm, but my real specialty is blah with some minor experience in blerg. Do not even ask me to fix your flig.');//t
console.assert(madlib('flerm', 'blah', 'blerg', 'flig') === 'miscellania');//f




///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
