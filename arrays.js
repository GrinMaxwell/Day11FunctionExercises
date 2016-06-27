// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function greatest(numArray){
  var greatest = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > greatest) {
      greatest = numArray[i];
    }
  }
  return greatest;
}



// ---------------------------
// 2. Find longest string
// ---------------------------
function longest(stringArray){
  var longest = '';
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longest.length) {
      longest = stringArray[i];
    }
  }
  return longest;
}



// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNums(numArray) {
  var evens = [];
  for (var i = 0; i < numArray.length; i++) {
    if(numArray[i]%2===0){
      evens.push(numArray[i]);
    }
  }
  return evens;
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNums(numArray) {
  var odds = [];
  for (var i = 0; i < numArray.length; i++) {
    if(numArray[i]%2!==0){
      odds.push(numArray[i]);
    }
  }
  return odds;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function isFinder(stringArray) {
  var isWords =[];
  for (var i = 0; i < stringArray.length; i++) {
    var word = stringArray[i];
    for (var h = 0; h < word.length; h++) {
      if(word[h] === 'i' && word[h+1] === 's'){
        isWords.push(word);
      }
    }
  }
  return isWords;
}


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function arrayJoin(array1, array2) {
  return array1.concat(array2);
}



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

function jsTeachersFinder(teachers) {
  var jsAlpha = [];
  for (var i = 0;i<teachers.length;i++) {
      if (teachers[i].teaches === 'JavaScript') {
        jsAlpha.push(teachers[i].firstname);
      }
  }
  return jsAlpha.sort();
}
