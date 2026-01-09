//  Problem 1
function reverse(str) {
  return str.split("").reverse().join("");
}
const input1 = prompt("Problem 1 : Enter a string to reverse :");
alert("Reversed : " + reverse(input1));

// problem 2
function vowelsCount(str) {
  const vowels = "aeiou";
  let count = 0;
  for (const charecter of str.toLowerCase()) {
    if (vowels.includes(charecter)) count++;
  }
  return count;
}
const input2 = prompt("Problem 2: Enter a string to count vowels:");
alert("Vowels count : " + vowelsCount(input2));

// Problem 3
function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
const input3 = prompt("Problem 3 : Enter a string to check palindrome :");
alert(palindrome(input3) ? "true" : "false");

// Problem 4
function maxNumber(arr) {
  let max = arr[0];
  for (const num1 of arr) if (num1 > max) max = num1;
  return max;
}
const input4 = prompt("Problem 4 : Enter numbers to find max");
const arr4 = input4.split(",").map(Number);
alert("Maximum :" + maxNumber(arr4));

// Problem 5
function duplicatesNumbers(arr) {
  const result = [];
  for (const num of arr) if (!result.includes(num)) result.push(num);
  return result;
}
const input5 = prompt("Problem 5 : Enter numbers to remove duplicates");
const array = input5.split(",").map(Number);
alert("Without duplicates :[" + duplicatesNumbers(array) + "]");

// Problem 6
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) sum += num;
  return sum;
}
const input6 = prompt("Problem 6 : Enter numbers to sum");
const arr6 = input6.split(",").map(Number);
alert("Sum: " + sumArray(arr6));

// Problem 7
function evenNumbers(arr) {
  const evens = [];
  for (const num of arr) if (num % 2 === 0) evens.push(num);
  return evens;
}
const input7 = prompt("Problem 7 : Enter numbers to even numbsers:");
const arr7 = input7.split(",").map(Number);
alert("Even numbers : [" + evenNumbers(arr7) + "]");

//  Problem 8
function capitalizedWords(str) {
  const words = str.split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const input8 = prompt("Problem 8 : Enter a sentence to capitalize words:");

if (input8 === null || input8.trim() === "") {
  alert("No sentence provided!");
} else {
  alert("Capitalized : " + capitalizedWords(input8));
}

//  Problem 9
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
const input9 = prompt("Problem 9 : Enter a number to find factorial");
const number = Number(input9);

if (input9 === null || isNaN(number) || number < 0) {
  alert("Please enter a valid non-negative number!");
} else {
  alert("Factorial of " + number + " is " + factorial(number));
}

// Problem 10
let input = parseInt(prompt("Problem 10 : Enter a number to find the pingpong/pong/ping"));
pingPong(input);
function pingPong(num1) {
  let result = "";
  for (const i = 1; i <= num1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "pingPong\n";
    } else if (i % 3 === 0) {
      result += "Ping\n";
    } else if (i % 5 === 0) {
      result += "Pong\n";
    } else {
      result += i + "\n";
    }
  }
  alert(result);
}
