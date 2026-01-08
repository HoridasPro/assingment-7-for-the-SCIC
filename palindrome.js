function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
const inputs = ["racecar", "madam", "hello", "level", "world", "lal"];

inputs.forEach((input) => {
  console.log(input + " : " + palindrome(input));
});
