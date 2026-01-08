function maxNumber(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const numbers = [3, 5, 7, 99, 2, 1];
const result = maxNumber(numbers);
console.log(result);
