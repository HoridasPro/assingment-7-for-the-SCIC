function removeDuplicates(arr) {
  const array = [];
  for (const num of arr) {
    if (!array.includes(num)) {
      array.push(num);
    }
  }
  return array;
}
const numbers = [2, 55, 8, 4, 3, 7, 5, 4, 4, 3, 2];
const result = removeDuplicates(numbers);
console.log(result);
