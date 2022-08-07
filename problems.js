/*
    Original:
    Write a function `plusFive` that takes in a number as an argument and
    returns the sum of that number and 5.

    New:
    Write a function `plusTen` that takes in a number as an argument and
    returns the sum of that number and 10.
*/
function plusTen(num) {
    return num + 10;
}
console.log(plusTen(20));

/*
    Original:
    Write a function `printFives(max)` that prints out the multiples of 5 that
    are less than max.

    New:
    Write a function `returnSevens(max)` that returns an array that contains
    multiples of 7 that are less than max.
*/
function returnSevens(max) {
    let sevenarr=[];
    for (let i = 0; i<max; i++) {
        if (i % 7 === 0) {
            sevenarr.push(i);
        }
    }
return sevenarr;
}
console.log(returnSevens(15))


/*
    Original:
    Write a function named `eitherStringIncluded(sentence, word1, word2)` that
    accepts a sentence and two words as arguments. The `eitherStringIncluded`
    function should return `true` if *either* `word1` or `word2` is found in
    the sentence, and `false` if neither is found.

    New:
    Write a function named `bothStringsIncluded(sentence, word1, word2)` that
    accepts a sentence and two words as arguments. The `bothStringsIncluded`
    function should return `true` if *both* `word1` and `word2` are found in
    the sentence, and `false` if neither or only 1 is found.
*/
function bothStringsIncluded(sentence, word1, word2) {
    if (sentence.includes(word1) && sentence.includes(word2) === true)
    {
        return true
    }
    else if (sentence.includes(word1) || sentence.includes(word2) === false) {
        return false
    }

}
console.log(bothStringsIncluded("ulas kalp milo kalp tugba","ulas","milo"))

/*
    Original:
    Write a function `sumArray(arr)` that takes in an array of numbers and
    returns the total sum of all the numbers.

    New:
    Write a function `productArray(arr)` that takes in an array of numbers and
    returns the product of all the numbers. The product of an array  is the number
    you get when you multiply all the numbers together.
*/
function productArray(arr) {
  let sum=1;
  for(let i=0;i<arr.length;i++) {
    sum *= arr[i];
  }
  return sum
}
console.log(productArray([1,3,5,6]))

/*
    Original:
    Write a function `threeOrSeven` that takes in a number and returns `true`
    if the number is divisible by either 3 or 7 and `false` otherwise.

    New:
    Write a function `fiveAndEleven` that takes in a number and returns `true`
    if the number is divisible by BOTH 5 and 11 and `false` otherwise.
*/
function fiveAndEleven(num) {
    if (num %5 === 0 && num %11 === 0) {
        return true
    }
    return false
}
console.log(fiveAndEleven(55));

/*
    Original:
    Write a function, `countVowels(word)`, that takes in a string word and
    returns the number of vowels in the word.

    New:
    Write a function, `countConsonants(word)`, that takes in a string word and
    returns the number of consonants in the word.
*/
function countConsonants(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u") {
            count++;
        }
    }
    return count
}
console.log(countConsonants("abcdefg"))

/*
    Original:
    Write a function `whisper` that takes in a string and returns a "whispered"
    version of that string. Use the `.toLowerCase()` function on a string to
    see what it does!

    New:
    Write a function `alternatingLetters` that takes in a string and returns a
    version of that string where letters alternate uppercase and lowercase,
    starting with lowercase. Do not make exceptions for spaces within the
    string.

    Strings are immutable, so here are some tools you may find useful. The
    `.split('')` function on strings to make a copy of the string as an array.
    The `.join('')` function joins the elements in an array into a string.
*/
function alternatingLetters(str) {
    let splitstr =str.split(" ");
    let mapstr=splitstr.map(function(joinstr) {
        return joinstr[0].toUpperCase()+joinstr.slice(1);
    })
    return mapstr.join(" ");
}
console.log(alternatingLetters("every animal has same rights"));


function capFirstLetterInSentence(sentence) {
    let words = sentence.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return words.join(" ");
}

console.log(capFirstLetterInSentence("i am learning how to code"));
//I Am Learning How To Code

module.exports = {
    plusTen,
    returnSevens,
    bothStringsIncluded,
    productArray,
    fiveAndEleven,
    countConsonants,
    alternatingLetters
}
