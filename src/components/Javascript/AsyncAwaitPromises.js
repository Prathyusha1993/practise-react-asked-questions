function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  });
}

makeRequest('Google').then((response) => {
  console.log('Reponse Received');
  return processRequest(response)
}).then((processedResponse) => {
  console.log(processedResponse);
}).catch(err => {
  console.log(err);
})

//easy to uderstand with async await where to make code synchronous
async function doWork () {
  try{
    const response = await makeRequest('Google') //here it waits till the code gets settled and we can catch the erros by using try catch block
console.log('Response Received');
const processedResponse = await processRequest(response);
console.log(processedResponse);
  } catch(err) {
    console.log(err);
  }

}
doWork();

//ex
function resolveAfter3Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved');
    },3000)
  })
}

async function asyncCall() {
  try {
    console.log('calling');
    const result = await resolveAfter3Seconds()
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}

asyncCall();

//async funs and excution order:
function resolveAfter2seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('slow');
      console.log('slow promise is done');
    }, 2000)
  });
}

function resolveAfter1second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fast');
      console.log('fast promise is done');
    }, 1000)
  });
}

async function sequentialStart() {
  console.log('==SEQUENTIAL START==');
  const slow = await resolveAfter2seconds();
  console.log(slow);
  const fast = await resolveAfter1second();
  console.log(fast);
  console.log('sequential start is done');
}

async function sequentialWait() {
  console.log('==SEQUENTIAL WAIT==');
  const slow = resolveAfter2seconds();
  const fast = resolveAfter1second();

  console.log(await slow);
  consoele.log(await fast);
  console.log('sequeential wait is done');
}

async function concurrent1() {
  console.log('==CONCURRENT 1 starts==');
  const results = await Promise.all([resolveAfter2seconds(), resolveAfter1second()]);
  console.log(results[0])
  console.log(results[1]);
  consoele.log('concurrent 1 is done');
}

async function concurrent2() {
  console.log('==CONCURRENT 2 starts==');
  await Promise.all([
    (async() => console.log(await resolveAfter2seconds()))(),
    (async() => console.log(await resolveAfter1second()))()
  ])
  console.log('concurrent 2 is done');
}

sequentialStart();
setTimeout(sequentialWait, 4000);
setTimeout(concurrent1, 7000);
setTimeout(concurrent2, 10000);