const myName = 'Pinky';

function printName(){
    console.log(myName)
}
printName();

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();

function z() {
    var b = 900;
    function x() {
        var a =7;
        function y() {
            console.log(a,b);
        }
        y();
    }
    x()
}
z();

