
let niz1 = [1,2,3];

console.log(niz1)

let niz = [];

console.log(niz)

const PI = 3.15;
console.log(PI);



console.log(niz1[0])
console.log(niz1.length)

console.log(niz1[niz1.length - 1])

niz1.push(19); //dodaje na kraju

console.log(niz1)

niz1.pop(); // uklanja poslednji iz liste
console.log(niz1)


function stampajBroj(argument){

    console.log('Stampam broj sa indeksa 1: ' + argument[1])
}

stampajBroj(niz1)


stampajBroj(["jabuka","kruska",2,3])


