// --------------------------------------------------------------------------
// spread syntax

function run() {
  // combineArray();
  combineObject();
}

function combineArray() {
  const numberList: number[] = [2, -2, 1];
  const countList: Array<number> = [101, 201, 301];
  // const combineList = countList
  //   .slice(0, 2)
  //   .concat(numberList)
  //   .concat(countList.slice(2));

  // [ 101, 201, 2, -2, 1, 301 ]
  const combineList = [...countList.slice(0, 2), ...numberList, countList[countList.length - 1]];
  console.log(combineList);
}

interface options {
    startIndex: number;
    loop: boolean;
    usingArea: boolean;
}

function combineObject() {
  const defaultOptions: options = {
    startIndex: 0,
    loop: false,
    usingArea: true,
  };

  const customOptions: Partial<options> = {
    loop: true,
    usingArea: false,
  };

  // const combineOptions = Object.assign({}, defaultOptions, customOptions);
  const combineOptions = { ...defaultOptions, ...customOptions };
  console.log(combineOptions);
}

run();
