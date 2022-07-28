// Variables

var a; // Declarando
var b =  'b'; // Declaramos y asignamos
b = 'bb'; // Reasignación
var a = 'aa'; // Redeclaración

// Global Scope
var fruit = "Apple"; // global - (Esta variable puede ser accedidad desde cualquier parte del código.)

function bestFruit(){
	console.log(fruit);
};

bestFruit (); // Out: Apple
console.log(fruit) // Out: Apple

// Function Scope
function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana'){
        console.log(`Hello ${userName}`)
    }
}

greeting()
console.log(useName);   //No podemos acceder porque userName esta encapsulado dentro de greeting(), no es global.

// Block Scope
function foo(){
    if(true){
        var fruit1 = 'apple';        //existe en function scope
        const fruit2 = 'banana';     //existe en block scope
        let fruit3 = 'strawberry';   //existe en block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined