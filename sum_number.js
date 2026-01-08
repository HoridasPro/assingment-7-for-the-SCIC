function totalNumbersArray(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }
  return sum;
}
const numbers = [3, 5, 6, 1, 5];
const result = totalNumbersArray(numbers);
console.log(result);
