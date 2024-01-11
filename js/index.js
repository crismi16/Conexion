//Imprimir un mensaje consola
console.log("Hola Mundo");
//Declaracion variable
let nombre="Cristian";
let apellido="Tulmo";
let edad=23;
console.log("Mi nombre es "+nombre+" y mi apellido es "+apellido+" tengo "+edad+" años")
//Template de cadenas - interpolación de cadenas
console.log(`Mi nombre es ${nombre} ${apellido} tengo ${edad} años`);
//Tipo de dato undefined
let a;
console.log(a);
//Tipo de dato nan
let b=5;
let c="hola";
let multi=b*c;
console.log(multi);
//Tipo de datos objeto
const persona={
    nombre:"Cristian",
    apellido:"Tulmo",
    edad:23,
    estado_civil:"Casada",
    pasatiempos:["Leer","Escribir","Enseñar"],
    estudios:{
        primaria:"Escuela Elvira Ortega",
        secundaria:"VVC",
        superior:"Católica"
    },
    saludar:function(){
        return "Buenas noches";
    }
}
console.log(persona.nombre)
console.log(persona.saludar())
//tipo de dato array
const arreglo=["hola",true,22,"Chao"]
console.log(arreglo)
console.log(arreglo[1])
arreglo.push("Pedro")
console.log(arreglo)
arreglo.pop()
console.log(arreglo)
//Operador typeof
console.log(typeof b)