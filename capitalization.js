function capitalizedWords(str) {
  const words = str.split(" ");
  const capitalizedWords = [];

  for (const word of words) {
    capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return capitalizedWords.join(" ");
}

const words = "love programing hero team";
const result = capitalizedWords(words);
console.log(result);
