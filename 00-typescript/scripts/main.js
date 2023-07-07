"use strict";
// --------------------------------------------------------------------------
// 📌 [TypeScript → ECMAScript(JavaScript)]
// --------------------------------------------------------------------------
// - TypeScript는 타입 시스템을 사용할 수 있는 ECMAScript(JavaScript)입니다.
// - ECMAScript(JavaScript)는 2015년 이후 매년 업데이트 됩니다.
// - ECMAScript 2015(v6) → ECMAScript 2023(v14)
// --------------------------------------------------------------------------
// 01. let, const
// 02. template literal
// 03. operators (nullish, optional chaining)
// 04. spread syntax
// 05. destructuring assignment
// 06. arrow function
// 07. default parameters
// 08. rest parameters
// 09. iterable / iterator
// 10. generator function
// 11. promise & async - await
// 12. ES Modules
// 13. class

console.log('es module');

import createRoot, { createElement as h /* hyperscript */, shuffle } from './12-es-modules.js';
// console.log(EsModules.shuffle([1, 2, 3, 4, 5]));
// console.log(EsModules.numberWithComma(9_800_456));

console.log(typeof createRoot);
const originArray = [2, 4, 5, 6];
const createdArray = shuffle(originArray);

console.assert(Object.is(originArray, createdArray), 'origin create 동일한 객체');

function demo1() {

}

function demo2() {
  const strongEle = h('strong', {}, 'Virtual');
  const headingEle = h('h1', { className: 'headline', lang: 'en ' }, strongEle, ' element');
  const rootEle = document.getElementById('root');
  const virtualDomRoot = createRoot(rootEle);
  // console.log(virtualDomRoot);
  virtualDomRoot.render(headingEle);
}

demo2();