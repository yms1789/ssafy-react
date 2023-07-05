// --------------------------------------------------------------------------
// default parameters

const randomNumber = (min: number = 0, max: number = 10) => {
  let minValue = min ?? 0;
  let maxValue = max ?? 10;
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
};

let n1 = randomNumber();
console.log(n1);

let n2 = randomNumber(5);
console.log(n2);

let n3 = randomNumber(5, 7);
console.log(n3);
