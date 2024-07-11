// var -> function 
// let -> block
// const -> block

function sayHello() {
    for (var i=0; i<5; i++){
        console.log(i)
    }
    console.log(i);
}
sayHello();

function sayHello1() {
    for (let i=0; i<5; i++){
        console.log(i)
    }
    console.log(i);
}
sayHello1();

//objects:
const person = {
    name: 'Pinky',
    gender: 'Female',
    walk: function(){},
    talk(){}
}

person.talk();
person['name'] = 'Prathyusha';

//this in js:
const person1 = {
    name:'Pinky',
    walk(){
        console.log(this); //always returns the reference to current object
    },
}
person.walk();

const walk = person.walk;
walk(); //returns undefined 

//binding this:
//in js functions are objects and they have methods like bind, call and apply
const walk1 = person.walk.bind(person);

//Array functions:
const sqaure = function(number) {
    return number * number;
}

const square1 = number => number * number;
console.log(square1(5));

const jobs = [
    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false},
    ]
const activeJobs = jobs.filter((job) => job.isActive)
console.log(activeJobs);

//array functons and this:
const person = {
    talk(){
        var self = this;
        setTimeout(() => {
            console.log('this', this)
        }, 1000)
        
    }
}
person.talk();

//map: to render a list of items and returns a new array 
const colors = ['red', 'blue', 'yellow', 'green']
const items = colors.map((color) => `<li>${color}</li>`
)
console.log(items);

//object destructing:
const address = {
    street: 'alhambra',
    city: 'fremont',
    state: 'CA',
    country: 'USA'
};
const street = address.street;
const city = address.city;
const state = address.state;
//destruct
// const {street, city, state, country} = address;
const {street:st} = address;

//spread operator: 
const first = [1,2,3]
const second = [4,5,6]
const combined = first.concat(second);
const combined1 = [...first, 'a', ...second] 
// we cannot add element in concat method but using spread aoperator we can add elements in between
console.log(combined1);

const clone = [...first]
console.log(first);
console.log(clone);

//spread operator on objs
const first1 = {name: 'pinky'}
const sec2 = {job: 'learner'}
const combined2 = {...first1, ...sec2, location:'America'}
console.log(combined2);

const clone1 = {...first1} //we canc lone objects using so


//classes:
class Person  {
    constructor(name) {
        this.name = name;
    };
    walk() {
    console.log('walk');
    }
}

class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree
    }
    teach(){
        console.log('teach');
    }
}
const teacher = new Teacher('Pinky', 'B.tech')

//rest operator
function sum(...theArgs){
    let total=0
    for(let arg of theArgs){
        total =+ arg;
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,67,8,9,10))


//setTimeout : schedules a single excution with specified delay
//setTimeout(function, milliseconds, param1, param2, ...)
setTimeout(() => {
    console.log('Helllo');
}, 2000);

//example:
function greeting() {
    console.log('HEllo Hi');
}
setTimeout(greeting, 3000);

//we can also parameter to function
function greeting1(x) {
    console.log(x);
}
setTimeout(greeting1, 3000, 'Hiiiiiiiiii');

//we cal also cancel setTimeout before ecalling using clearTimeout
const timeout = setTimeout(greeting2, 5000, 'HIIIIIIIII');
if(true){
    clearTimeout(timeout);
}
//will nt run due to clearTimeout
function greeting2(x){
    console.log(x)
}


//setInterval: schedules a repeated execution with fixed interval
// setInterval(function, milliseconds, param1, param2, ...)
setInterval(() => {
    console.log('Hello');
}, 4000);

let counter = 0;
setInterval(count, 1000);
function count() {
    consoloe.log(counter++);
} //0,1,2,3,4,5,6,.....................

//we need to stop the counter using cleatInterval
let counter1 = 0;
const interval = setInterval(count1, 1000);
function count1(){
    console.log(counter1++);

        if(counter1 >5){
            clearInterval(interval);
        }
}