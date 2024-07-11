let name = {
    firstname: 'Prathyusha',
    lastname: 'kurigala',
    // printFullname: function() {
    //     console.log(this.firstname + ' ' + this.lastname)
    // }
}

let printFullName = function(hometown, state) {
    console.log(this.firstname + ' ' + this.lastname + ' ' + hometown + ' ' + state)
}
//call
printFullName.call(name, 'Punganur', 'AP')
//apply
printFullName.apply(name, ['Punganur', 'AP'])
//bind
let printMyDetails = printFullName.bind(name, 'Punganur', 'AP')
console.log(printMyDetails);
printMyDetails();

let name1 = {
    firstname: 'Navitha',
    lastname: 'kurigala',
}
//funcion borrowing or call
printFullName.call(name1, 'Mittapalli','AP')
//apply
printFullName.apply(name1, ['Mittapalli','AP'])
printFullName.apply(name1, new Array('Mittapalli','AP'))
//bind:
let myDetails = printFullName.bind(name1, 'Mittapalli','AP')
console.log(myDetails);

