// --------------------------------------------------------------------------
// rest parameters

const sum = (firstNumber: number, ...restNumbers: number[]): number => {
  return restNumbers.reduce((result, number) => result + number, firstNumber);
}

let result1 = sum(2, 3, 9, 12, 105);
console.log(result1);

let result2 = sum(90, 418, -7);
console.log(result2);
