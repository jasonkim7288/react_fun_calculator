import numWords from 'number-to-words';

const operator = {
  '+': 'plus',
  '-': 'minus',
  '*': 'multiply',
  '/': 'divide'
}

export const convertNumArrayToWordFunc = (expArr) => {
  return expArr.reduce((acc, ele) => {
    const num = parseInt(ele);
    if(isNaN(num)) {
      return `${operator[ele]}(${acc})`;
    } else {
      const strNum = numWords.toWords(num).replaceAll(',', '').split(/[ -]/).map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
      return `${strNum}(${acc})`;
    }
  }, "");
}