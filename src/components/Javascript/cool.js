module.exports.add = function(a,b) {
    return a+b;
}

module.exports.subtarct = function(a,b) {
    return a-b;
}

export default class User {
    constructor(name, age) {
        this.name =name;
        this.age= age;
    }
}

export function printName() {
    console.log(`user name is ${user.name}`);
}

export function printAge() {
    console.log(`user age is ${user.age}`);
}