// js is synchoronous single threaded language

//ex:
function a() {
    console.log('a');
}
a();
console.log('end');

//ex settimeout foe event loop
console.log('start');
setTimeout(function cb() {
    console.log('callback')
}, 5000);

console.log('end');

//ex with DOM for another event loop
console.log('start');
document.getElementById('btn').addEventListener('click', function cb() {
    console.log('callback')
});

console.log('end');

//ex with fetch
console.log('strat');
setTimeout(function cbT(){
    console.log('CB setTimeout');
}, 5000);
fetch('https://api.github.com/users').then(function cbF() {
    console.log('CB fetch');
})

console.log('end');