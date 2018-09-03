async function f1(data) {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1500)
  });
  let result = await promise;
  console.log(data);
}

async function f2() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error('Yup, it broke');
    }, 2000)
  });
  let result = await promise;
  console.log(result);
}
async function f3() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(3);
    }, 1500)
  });
  let result = await promise;
  return result;
}
async function g() {
  try {
    let result = await f3();
    await f2().catch(console.log);
    await f1(result);
  }
  catch(e) {
    console.log('error',e);
  }
}
g();