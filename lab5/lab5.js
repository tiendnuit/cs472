/* ============================================================================================================================================
    1.	Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
*/
let max = function (num1, num2) {
    if (num1 >= num2) return num1;
    else return num2; 
}
//Example:
console.log("=================");
console.log("1. Max of (5, 3): " + max(5,3));

/* ============================================================================================================================================
    2.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. 
*/
let maxOfThree = function (num1, num2, num3) {
    let max = num1;
    if (max < num2) max = num2;
    if (max < num3) max = num3;

    return max;
}
//Example: 
console.log("=================");
console.log("2. Max of (9, 5, 1): " + maxOfThree(9, 5, 1));

/* ============================================================================================================================================
    3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
*/
let isVowel = function(character) {
    if (!character || character.lenght > 1) return false;
    let vowel = "aeiou";
    
    return vowel.includes(character);
}
//Example: 
console.log("=================");
console.log("3. e isVowel: " + isVowel("e"));

/* ============================================================================================================================================
    4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. 
    For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. 
    Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop) 
*/
// sum() function
let sum = function(arr) {
    if (!arr || !(Array.isArray(arr))) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}
//Example: 
var arr = [1, 2, 3, 4];
console.log("=================");
console.log("4. Sums and Multiplies of (1, 2, 3, 4): ");
console.log("Sum: " + sum(arr));

// multiply() function
let multiply = function(arr) {
    if (!arr || !(Array.isArray(arr))) return 0;
    let i = 0;
    let total = 1;
    while (i < arr.length) {
        total *= arr[i];
        i++;
    }

    return total;
}

//Example: 
console.log("Total: "+ multiply(arr));

/* ============================================================================================================================================
    5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". 
*/
let reverse = function(str) {
    if (!str) return "";
    let result = "";
    let i = str.length - 1;
    while (i >= 0) {
        result += str.substring(i, i+1);
        i--;
    }
    return result;
}

let reverse1 = function(str) {
    if (!str) return "";
    let len = str.length
    let index = len - 1;
    while (index >= 0) {
        str += str.substring(index, index+1);
        index--;
    }
    return str.substring(len, len+len);
}

let reverse2 = function(str) {
    if (!str) return "";
    let len = str.length
    let index = 0;
    let midIndex = parseInt((len-1)/2);
    while (index <= midIndex) {
        let revIndex = len - 1 - index;
        let revChar = str.substring(revIndex, revIndex+1);
        let currChar = str.substring(index, index+1);
        str = str.substring(0, index) + revChar + str.substring(index + revChar.length);
        str = str.substring(0, revIndex) + currChar + str.substring(revIndex + revChar.length);
        index++;
    }
    return str;
}

//Example: 
console.log("=================");
console.log("5. Reversal of 'jag testar': " + reverse("jag testar"));

/* ============================================================================================================================================
    6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one
*/
let findLongestWord = function(arr) {
    if (!arr || !(Array.isArray(arr))) return 0;
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxLength < arr[i].length) maxLength = arr[i].length;
    }
    return maxLength;
}

//Example: 
console.log("=================");
console.log("6. Length of the longest: " + findLongestWord(["jag testar", "aaad", "re", "1234567", "1", "poiuyt"]));

/* ============================================================================================================================================
    7.	Write a function filterLongWords() that takes an array of words 
    and an integer i and returns a new array containing only those words that were longer than i characters.
*/

let filterLongWords = function(arr, len) {
    if (!arr || !len || !(Array.isArray(arr))) return null;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (len < arr[i].length) result.push(arr[i]);
    }

    return result;
}

//Example: 
console.log("=================");
console.log("7. Filter Long Words: " + filterLongWords(["testar", "aaad", "re", "1234567", "1", "poiuyt"], 5));

/* ============================================================================================================================================
    8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers 
    and calculates and returns the sum of the squares of each number in the input array. 
    E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. 
    Note: Write your Javascript code without using Imperative programming. i.e. 
    Do NOT use any explicit looping construct; instead use functional programming style/approach.
*/
let computeSumOfSquares = function(arr) {
    if (!arr || !(Array.isArray(arr))) return 0;
    return arr.reduce(function(prevVal, elem) {
        return prevVal + elem * elem;
    }, 0)
}

//Example: 
console.log("=================");
console.log("8. Compute SumOfSquares: " + computeSumOfSquares([1,2,3]));

/* ============================================================================================================================================
    9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.
*/
let printOddNumbersOnly = function(arr) {
    if (!arr || !(Array.isArray(arr))) return;
    arr.filter(function(elem, i) {
        return !isNaN(arr[i]) && arr[i] % 2 != 0;
    }).forEach(function(currentValue) {
        console.log(currentValue);
    })
    
}

//Example: 
console.log("=================");
console.log("9. printOddNumbersOnly: ");
printOddNumbersOnly([1, 2, 3, "test", "5"])

/* ============================================================================================================================================
    10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers 
    and calculates and returns the sum of the squares of only the even numbers in the input array. 
    E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
*/
let computeSumOfSquaresOfEvensOnly = function(arr) {
    if (!arr || !(Array.isArray(arr))) return;
    return arr.filter(function(elem) {
        return !isNaN(elem) && elem % 2 == 0;
    }).reduce(function(prevVal, elem) {
        return prevVal + elem * elem;
    }, 0);
}

//Example: 
console.log("=================");
console.log("10. Compute SumOfSquaresOfEvensOnly: " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

/* ============================================================================================================================================
    11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) 
    without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 
*/
// sum() function
let newSum = function(arr) {
    if (!arr || !(Array.isArray(arr))) return 0;
    return arr.reduce(function(pre, ele) {
        return pre + ele;
    }, 0);
}

// multiply() function
let newMultiply = function(arr) {
    if (!arr || !(Array.isArray(arr))) return 0;
    return arr.reduce(function(pre, ele) {
        return pre * ele;
    }, 1);
}
//Example: 
var arrs = [1, 2, 3, 4];
console.log("=================");
console.log("11. Sums and Multiplies of (1, 2, 3, 4): ");
console.log("NewSum: " + newSum(arrs));
console.log("NewMultiply: " + newMultiply(arrs));

/* ============================================================================================================================================
    12.	Implement Javascript code for a function named, findSecondBiggest, 
    which takes as input, an array of numbers and finds and returns the second biggest of the numbers. 
    For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. 
    (Note: Do not use sorting!)
*/
let findSecondBiggest = function(arr) {
    if (!arr || !(Array.isArray(arr))) return null;
    let biggest = null;
    let secondBiggest = null;
    for (let i = 0; i< arr.length; i++) {
        if (!biggest) biggest = arr[i];
        else if (biggest <= arr[i]) {
            secondBiggest = biggest;
            biggest = arr[i];
        } else if (!secondBiggest || secondBiggest < arr[i]) {
            secondBiggest = arr[i];
        }
    }
    return secondBiggest;
}
//Example: 
console.log("12. Find SecondBiggest of (19,9,11,0,12): " + findSecondBiggest([19,9,11,0,12]));

/* ============================================================================================================================================
    13.	Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, 
    and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, 
    beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), 
    prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), 
    prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
*/
let printFibo = function(n, a, b) {
    let count = 2;
    let results = [a, b];
    while (count < n) {
        let temp = a + b;
        a = b;
        b = temp;
        results.push(temp);
        count++;
    }

    console.log(results.toString());
}
//Example: 
console.log("13. Print Fibo of (10, 0, 1): ");
printFibo(10, 0, 1);
