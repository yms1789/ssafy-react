// --------------------------------------------------------------------------
// Promise, Async await

function main() {
  console.log('start!');

  // callback hell
  // 참고: https://bit.ly/3r5iUfe
  // delay(() => {
  //   console.log('1s');
  //   delay(() => {
  //     console.log('2s');
  //     delay(() => {
  //       console.log('3s');
  //       delay(() => {
  //         console.log('4s');
  //       });
  //     });
  //   });
  // });

  // Promise + Async function with await
  delayPromise().then(async () => {
    console.log('1s');
    await delayPromise();
    console.log('2s');
    await delayPromise();
    console.log('3s');
    await delayPromise();
    console.log('4s');
    await delayPromise(1500);
    console.log('5.5s');
    await delayPromise();
  });
}

function delay(callback, time = 1000) {
  setTimeout(callback, time);
}

function delayPromise(time = 1000) {
  return new Promise((resolve => {
    setTimeout(resolve, time);
  }));
}

main();
