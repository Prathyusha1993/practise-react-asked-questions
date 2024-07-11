const {add, subtract} = require('./cool.js');

console.log(add(5,6));
console.log(subtract(10,5));

import User from './cool.js';
import {printName, printAge} from './cool.js';

const user = new User('Pinky', 30);
console.log(user);

printName(user);
printAge(user);