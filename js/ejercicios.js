let num1=parseFloat(prompt("Ingrese un número"))
let num2=parseFloat(prompt("Ingrese otro número"))
let opcion=parseInt(prompt("Elija la opcion:<br> 1.Sumar<br> 2.Restar<br> 3.Multiplicar<br> 4.Dividir"))
switch(opcion){
    case 1: console.log(sumar(num1,num2));
    break;
    case 2: console.log(restar(num1,num2));
    break;
    case 3: console.log(multiplicar(num1,num2));
    break;
    case 4: console.log(dividir(num1,num2));
    break;
}
function sumar(num1,num2){
    let resultado=num1+num2;
    document.write(`Suma: ${resultado} `)
    return `Suma: ${resultado} `;
}
function restar(num1,num2){
    let resultado=num1-num2;
    document.write(`Resta: ${resultado} `)
    return `Resta: ${resultado} `;
}
function multiplicar(num1,num2){
    let resultado=num1*num2;
    document.write(`Multiplicación: ${resultado} `)
    return `Multiplicación: ${resultado} `;
}
function dividir(num1,num2){
    let resultado=num1/num2;
    document.write(`División: ${resultado} `)
    return `División: ${resultado} `;
}
let nota1=parseFloat(prompt("Ingrese nota 1"))
let nota2=parseFloat(prompt("Ingrese nota 2"))
let nota3=parseFloat(prompt("Ingrese nota 3"))
function promedio(nota1,nota2,nota3){
    let resultado=(nota1+nota2+nota3)/3
    let estado=""
    if(resultado<=6){
        estado="Suspendido"
    }
    if(resultado>=7){
        estado="Aprobado"
    }
    return `Estado: ${estado} `
}
let estado=promedio(nota1,nota2,nota3)
console.log(promedio(nota1,nota2,nota3))
document.write(estado)
let precio=parseFloat(prompt("Ingrese el precio del producto:"))
let total=parseFloat(0);
let pTotal=(precio)=>{
    total= precio*1.12;
    return `Total: ${total} `;
}
console.log(pTotal(precio))
document.write(`Total: ${total} `)
let opcion1=parseInt(prompt("Elija la opcion:<br> 1.Ford Fiesta<br> 2.Ford Focus"))
let descuento=0;
let auto=(opcion1)=>{
    if(opcion1==1){
        descuento="5%"
    }
    if(opcion1==2){
        descuento="10%"
    }
    return `Descuento: ${descuento} `
}
console.log(auto(opcion1))
document.write(`Descuento: ${descuento} `)