//map:
const arr = [5,1,3,2,6];

//double: [10,2,6,4,12]
const output = arr.map((double) => double*2)
console.log(output)

//triple:[15,3,9,6,18]
const output1 = arr.map((triple) => triple*3)
console.log(output1)

// binary:['101','1','11','10','110']
const output2 = arr.map((bin) => bin.toString(2))
console.log(output2)

//filter:
const output3 = arr.filter((isOdd) => isOdd%2)
console.log(output3);

const output4 = arr.filter((iseven) => iseven%2 === 0)
console.log(output4);

const output5 = arr.filter((check) => check > 4)
console.log(output5);

const output6 = arr.filter((check) => check < 5)
console.log(output6);

//reduce: takes all elemnentd in array and iterates and gives single value
const output7 = arr.reduce((acc, curr) => acc + curr)
console.log(output7);

//find max inside this array
const output8 = arr.reduce((acc, curr) =>{
     if(curr > acc){
         acc = curr
     }
    return acc;
})
console.log(output8);

const users = [
    {firstName:'Pinky', lastName:'Kurigala', age:30},
    {firstName:'Subhashini', lastName:'Kurigala', age:60},
    {firstName:'Raja', lastName:'Kurigala', age:60},
    {firstName:'Navitha', lastName:'Kurigala', age:34},
    ];
const output9 = users.map((user) => user.firstName+' '+user.lastName)
console.log(output9)

const out1 = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else {
        acc[curr.age] = 1
    }
    return acc;
}, {})
console.log(out1)

const out2 = users.filter((user) => user.age > 30).map((x) => x.firstName)
console.log(out2);