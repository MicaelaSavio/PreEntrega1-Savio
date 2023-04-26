// En principio se le pide al usuario que ingrese el celular con el cual hizo su registro en la pagina para acceder a la calculadora.

let usuario = prompt ("Porfavor si esta registrado ingrese su celular para ingresar")
while (usuario != "123456"){
    alert ("usuario incorrecto")
    let usuario = prompt ("Ingrese su celular para ingresar") 
   
}
alert ("Bienvenida");


// Luego se le solicita al usuario su nombre para darle la bienvenida. 


alert ("Cual es tu nombre?");
let nombre = prompt ("Ingresa tu nombre");
let resultado =  `${nombre}`;
let saludo = "Hola ";
let final = " Bienvenido a la pagina";

alert (saludo + nombre + final);

// Aca estaria la calculadora que realiza las 4 operaciones: suma, resta, multiplicacion y division. 

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt (num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt (num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt (num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt (num2);
}

alert ("¿Que operacion quisieras realizar?");
let operacion = prompt ("1: sumar, 2: restar, 3: multiplicar, 4: dividir");

if (operacion == 1, sumar) {
    let numero1 = prompt ("primer numero para sumar");
    let numero2 = prompt ("segundo numero para sumar");
    resultado = sumar (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}
else if (operacion == 2, restar) {
    let numero1 = prompt ("primer numero para restar");
    let numero2 = prompt ("segundo numero para restar");
    resultado = restar (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}

else if (operacion == 3, multiplicar) {
    let numero1 = prompt ("primer numero para multiplicar");
    let numero2 = prompt ("segundo numero para multiplicar");
    resultado = multiplicar (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}

else if (operacion == 4, dividir) {
    let numero1 = prompt ("primer numero para dividir");
    let numero2 = prompt ("segundo numero para dividir");
    resultado = dividir (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}

// Por ultimo se le consulta al usuario si fue favorable el uso de la calculadora.

let inicio = prompt ("Te gustaron las operaciones matematicas, responde: si / no ?")

if (inicio.toLowerCase () === "si") {
    alert("Que bueno leer eso! pronto tendremos mas actividades para ti :)");
} else {
    alert("Lamentamos que no haya sido de tu agrado.");
}