
const ride = new Promise((resolve, reject) => {
    if(arrived) {
        console.log('Drive arrived')
    } else {
        console.log('Driver bailed')
    }
})

//similar func by using.then
ride.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error)
})
.finally(() => {  //method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.
    console.log('all settled!');
})


let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if(a === 2){
        resolve('success');
    } else {
        reject('failed');
    }
})
p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((error) => {
    console.log('This is in the catch ' + message); 
})

//another example:
let userLeft = false;
let userWatchingCatMeme = true;

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if(userWatchingCatMeme) {
            reject({
                name: 'User watching cat meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thums up and subcribe');
        }
    })
}
watchTutorialPromise().then((message) => {
    console.log('Success', +message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})

//promise all example:
const recordVideoOne =new Promise((resolve, reject) => {
    resolve('Video 1 recorded');
})

const recordVideoTwo =new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
})

const recordVideoThree =new Promise((resolve, reject) => {
    resolve('Video 3 recorded');
})
Promise.all([ //it returns all the values
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
}).catch((error) => {
    console.log(error);
})

Promise.race([ //eventual state of the first promise that settles. it returns only one value
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

Promise.allSettled([ //takes iterable of promises as input and returns single promise
    recordOne,
    recordTwo,
    recordThree
    ]).then((mesg) => {mesg.forEach((msg) => console.log(msg.status))})
    .catch((error) => console.log(error));
    
    Promise.any([ //this returned promise fulfills when any of the input's promises fulfills with the first fulfillement value.
    recordOne,
    recordTwo,
    recordThree
    ]).then((mesg) => {console.log(mesg)})
    .catch((error) => console.log(error));


//example
const getFruits = new Promise((resolve, reject) => {
    if(fruits) {
        resolve('Fruits are available');
    } else {
        reject('Fruits are not available');
    }
})

getFruits.then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log('Error: ' + error);
})

//example
const cart = ['shoes', 'pants', 'shirt'];
createOrder(cart, function(orderId) {
  proceedToPayment(orderId, function(paymentInfo) {
    showOrderSummary(paymentInfo, function() {
        updateWalletBalance();
    });
  });
}); //this is a callback hell

const promise = createOrder(cart);
promise.then((orderId) => {
  proceedToPayment(orderId);
})

//above type of code using promise:
//this is promise chaining
createOrder(cart).then(function (orderId) {
   return proceedToPayment(orderId);
}).then(function(paymentInfo) {
   return showOrderSummary(paymentInfo);
}).then(function(paymentInfo) {
   return updateWalletBalance(paymentInfo);
})

//using arrow functions above ex
createOrder(cart).then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo));


const prommise = createOrder(cart);
promise.then(function(orderId) {
    console.log(orderId);
    proceedToPayment(orderId);
}).catch(function(error) {
    console.log(error);
})

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        if(validateCart(cart)) {
            const err =  new Error('Cart is not valid')
            reject(err);
        }
        const orderId = '12345';
        if(orderId) {
            resolve(orderId);
        }
    });
    return pr;
}

function validateCart(cart) {
    return true;
}