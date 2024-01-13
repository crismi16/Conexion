//Funciones declaradas - hoisting
function saludar(nombre){
    return `Hola, buenas noches ${nombre}`
}
console.log(saludar("Teresa"))
//funcion flecha - no hoisting
//let saludar=()=>{}
let saludo=(nombre2)=>`Hola, buenas noches ${nombre2}`
console.log(saludo("Rafael"))

let generarCaracteres=(numero,caracter)=>{
    let respuesta="";
    for(let i=0;i<numero;i++){
        respuesta+=caracter;
    }
    return respuesta;
}
console.log(generarCaracteres(7,'a'));

let sumaArreglo=(arreglo)=>{
    let suma=0;
    for(i=0;i<arreglo.length;i++){
        suma+=arreglo[i];
    }
    return suma;
}
console.log(sumaArreglo([2,3,6,1]));
console.log(sumaArreglo([9,9,10,2,4,5]));

let objeto = (obj) => {
    return Object.keys(objeto)
}
console.log(objeto({nombre:"Teresa",edad:23,direccion:"Quito"}))

let precio=parseFloat(prompt("Ingrese el precio"))
let descuento=parseFloat(prompt("Ingrese el descuento"))
let total=parseFloat(0);
let iva=parseFloat(0);
let neto=parseFloat(0);

let ctotal=(precio,descuento)=>{
    total = precio*((100-descuento)/100);
    return total;
}
let cIva=(total)=>{
    iva=total*0.12;
    return iva;
}

let cneto=(total,iva)=>{
    neto = total+iva;
    return neto;
}
console.log(ctotal(precio,descuento));
console.log(cIva(total));
console.log(cneto(total,iva));
document.write(`Precio Total`)

