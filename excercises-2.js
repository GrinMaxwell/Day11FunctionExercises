// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1>num2) {
      return num1;
    } else if (num2>num1) {
      return num2;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    if (num1>num2 && num1>num3) {
      return num1;
    } else if (num2>num1 && num2>num3) {
      return num2;
    } else if (num3>num1 && num3>num2) {
      return num3;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    } else {
      return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var phraseSplit = phrase.split('');
    for (var i = 0; i < phraseSplit.length; i++) {
      if (phraseSplit[i] !== 'a' && phraseSplit[i] !== 'e' && phraseSplit[i] !== 'i' && phraseSplit[i] !== 'o' && phraseSplit[i] !== 'u') {
        phraseSplit.splice(i+1, 0, 'o', phraseSplit[i]);
        i += 2;
      }
    }
    var newPhrase = phraseSplit.join('');
    return newPhrase;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
  var phraseSplit = phrase.split('');
  var reverse = [];
  for (var i = 0; i < phraseSplit.length; i++) {
      reverse.push(phraseSplit[phraseSplit.length-(i+1)]);
  }
  var newPhrase = reverse.join('');
  return newPhrase;
    //...
}
