function vowelsCount(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let charecter of str.toLowerCase()) {
    if (vowels.includes(charecter)) {
      count++;
    }
  }
  return count;
}
const input = "programing";
const result = vowelsCount(input);
console.log(result);
