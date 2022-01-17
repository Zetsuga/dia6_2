let myLib = require("./index");

let op1 = 7;
let op2 = 2;

console.log(`La operación elegida es Suma `+
    `el primer operador es ${op1} y el segundo es ${op2}.`+
    `\nTotal = ${myLib.suma(op1,op2)}`);

console.log(`La operación elegida es Resta `+
    `el primer operador es ${op1} y el segundo es ${op2}.`+
    `\nTotal = ${myLib.resta(op1,op2)}`);

console.log(`La operación elegida es Multiplicacion `+
    `el primer operador es ${op1} y el segundo es ${op2}.`+
    `\nTotal = ${myLib.multiplicacion(op1,op2)}`);

console.log(`La operación elegida es division `+
    `el primer operador es ${op1} y el segundo es ${op2}.`+
    `\nTotal = ${myLib.division(op1,op2)}`);

console.log(`El cuadrado del número  ${op1} es .`+
    `\nTotal = ${myLib.cuadrado(op1)}`);

