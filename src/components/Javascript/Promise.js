import { resolvePath } from "react-router-dom";

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
.finally(() => {
    console.log('all settled!');
})


let p = new Promise((reoslve, reject) => {
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
            reoslve('Thums up and subcribe');
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

Promise.race([ //it returns only one value
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})