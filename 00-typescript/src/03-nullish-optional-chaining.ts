// --------------------------------------------------------------------------
// operators (nullish, optional chaining)

function run() {
  nullish();
  // optionalChaining();
}

function nullish() {
  let value = 0;

  let result: number | undefined = value || 100;
  console.log('|| : ', result);

  function isNullOrUndefined(value: unknown) {
    return value === null || value === undefined ? true : false;
  }

  result = !isNullOrUndefined(value) ? value : 100;
  console.log('isNullOrUndefined : ', result);

  // 코드를 작성합니다.
}

type topic = {
  _title: string;
  getTitle(): string;
  setTitle(value: string): void;
  getName?: () => string;
} 
function optionalChaining() {
  const topic: topic = {
    _title: '매년 업데이트 되는 ECMAScript',
    getTitle() {
      return this._title;
    },
    setTitle(value) {
      this._title = value;
    },
  };

  if (topic && typeof topic === 'object' && !Array.isArray(topic)) {
    let title, name;
    if (typeof topic.getTitle === 'function') {
      title = topic.getTitle();
    }
    // if (typeof topic?.getName === 'function') {
    //   name = topic.getName?.();
    // }
    console.log('typeof : ', title);
    console.log('typeof : ', name);
  }

  let title, name;
  name = topic.getName?.();
  // 코드를 작성합니다.
}

run();
