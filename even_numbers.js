function evenNumbers(arr) {
  const evenNumbers = [];

  for (const num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

function findEvenNumbers(arr) {
  const evenNumbers = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  return evenNumbers;
}

const numbers = [3, 4, 67, 3, 4];
const result = evenNumbers(numbers);
console.log(result);
