function octalToDecimal() {
  //Write code here
  let result = 0;
  let count = stringNum.length-1;
  for(let i =0; i< stringNum.length; i++){
    result+= stringNum[i] * (Math.pow(8,count));
    count--;
  }
  return result;
}

function anagram() {
  //Write code here
  return arrOfWords.filter(el => el.split('').sort().join('') === word.split('').sort().join(''));
}

function triangle() {
  //Write code here
  return (a === b || b === c || a * b * c === 0) ? "invalid" :  (a===90 || b===90||c==90) ? "right" : a<=90 && b<=90 && c<=90 ? "acute" : a>=90 || b>=90||c>=90 ? "obtuse" : "what is a triangle";
}

function fridayThe13ths() {
  //Write code here
  let count = 0;
  for (let i = 1; i <= 12; i++) {
    let day = new Date(i + "/13/" + year);
    if (day.getDay() === 5) {
      count++;
    }
  }
  return count;
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
