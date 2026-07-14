/*
let nombre="brandon";
let apellido="gomez";
let edad=20;
let estatura=1.75;
let esEstudiante=true;
let listaHobbies=["futbol","programacion","musica"];

let objetoPersona={
    nombre:"brandon",
    apellido:"gomez",
    edad:20,
    estatura:1.75,
    esEstudiante:true,
}

console.log("Nombre: "+nombre);
console.log("Apellido: "+apellido);
console.log("Edad: "+edad);
console.log("Estatura: "+estatura);
console.log("Es estudiante: "+esEstudiante);
console.log("Hobbies: "+listaHobbies);
console.log("Objeto persona: "+JSON.stringify(objetoPersona));

//let y var

//var me permite redeclarar la variable, mientras que let no lo permite, por lo que es recomendable usar let para evitar errores de redeclaración.
//var nombreEstudiante="brandon";
//var nombreEstudiante="juan";

//let nombreEstudiante="brandon";
// let nombreEstudiante="juan";
//console.log("Nombre estudiante: "+nombreEstudiante);
//var nombreEstudiante="brandon";
/*
if(true){
    let numero=10;
    console.log("Número dentro del bloque: "+numero);
}

console.log("Número fuera del bloque: "+numero); // Esto generará un error porque la variable numero no está definida fuera del bloque if.
//si fuera var numero=10; entonces si se podría acceder a la variable numero fuera del bloque if, ya que var tiene un alcance global o de función, mientras que let tiene un alcance de bloque.




if(true){
    let numero=10; //varible local al bloque if, no se puede acceder fuera de este bloque.
    console.log("Número dentro del bloque: "+numero);
}

let numero=20; //variable global, se puede acceder en cualquier parte del código.

console.log("Número fuera del bloque: "+numero); // Esto imprimirá 20, ya que la variable numero declarada con let dentro del bloque if no afecta a la variable numero declarada fuera del bloque.  

console.log("//////////---------------------------------///////");
console.log("Cantidad de letras: " +nombre.length); // Esto imprimirá la cantidad de letras que tiene el nombre "brandon", que es 7.
console.log("nombre en mayúsculas: " +nombre.toUpperCase()); // Esto imprimirá el nombre "brandon" en mayúsculas, que es "BRANDON".
console.log("nombre en minúsculas: " +nombre.toLowerCase()); // Esto imprimirá el nombre "brandon" en minúsculas, que es "brandon".

console.log("nombre con V " +nombre.replace("b","v").toUpperCase()); // Esto imprimirá el nombre "brandon" reemplazando la letra "b" por la letra "v", que es "vrandon".

console.log("estarura con 3 decimales: " +estatura.toFixed(3)); // Esto imprimirá la estatura con 3 decimales, que es 1.750. 

console.log("es string el nombre" +nombre.toString()); // Esto imprimirá el nombre "brandon" como una cadena de texto, que es "brandon".

console.log("no es string la edad" +edad.toString()); // Esto imprimirá la edad 20 como una cadena de texto, que es "20".

console.log("se encuentra musica en la lista: " +listaHobbies[2]); // Esto imprimirá el tercer elemento de la lista de hobbies, que es "musica".

console.log("objeto persona:" +objetoPersona.apellido); // Esto imprimirá el apellido de la persona en el objeto persona, que es "gomez".

console.log("//////////---------------------------------///////");

const edadMayor=18;
let mensaje ="";
if(edad>=edadMayor){
    mensaje="Es mayor de edad";
}else{
    mensaje="No es mayor de edad";
}
console.log(mensaje);

mensaje=edad>=edadMayor ? "Es mayor de edad" : "No es mayor de edad"; // Esto es una forma más concisa de escribir el mismo código utilizando el operador ternario.
console.log( "manera ternaria: " + mensaje);

console.log("//////////---------------------------------///////");

let semanforo="verde";

if(semanforo==="verde"){
    console.log("Puedes cruzar la calle");
}else if(semanforo==="amarillo"){ //cuando hay más de 3 condiciones se recomienda usar switch para evitar anidar demasiados if dentro de un else, lo que puede hacer que el código sea difícil de leer y mantener.
    console.log("Prepárate para cruzar la calle");
}else if(semanforo==="rojo"){
    console.log("No puedes cruzar la calle");
} else{
    console.log("Semáforo no válido");
}

semanforo="amarillo";

switch(semanforo){
    case "verde":
        console.log("Puedes cruzar la calle");
        break;
    case "amarillo":
        console.log("Prepárate para cruzar la calle, amarillo");
        break;
    case "rojo":
        console.log("No puedes cruzar la calle");
        break;
    default:
        console.log("Semáforo no válido");
        break;
}

//for para iterar sobre un bloque de código un número específico de veces, mientras que for...of se utiliza para iterar sobre los elementos de una colección, como un array o un objeto iterable.

console.log("//////////---------------------------------///////");

for(let i=0; i<5; i++){ //se ejecutará el bloque de código dentro del for 5 veces, imprimiendo el número de iteración en cada una de ellas.
    console.log("Número: "+i);
}

console.log("//////////---------------------------------///////");

for (let i=0; i<listaHobbies.length; i++){ //se ejecutará el bloque de código dentro del for una vez por cada elemento en la lista de hobbies, imprimiendo el índice y el hobby correspondiente en cada iteración.
    console.log("Índice: "+i);
    console.log("Hobby: "+listaHobbies[i]);
}

console.log("//////////---------------------------------///////");

for(let hobby of listaHobbies){ //se ejecutará el bloque de código dentro del for...of una vez por cada elemento en la lista de hobbies, imprimiendo el hobby correspondiente en cada iteración.
    console.log("Hobby: "+hobby);
}

console.log("//////////---------------------------------///////");

edad =15;

//no pregunta, se ejecuta al menos una vez, incluso si la condición es falsa desde el principio, por lo que se imprimirá la edad correspondiente en cada iteración, incluso si la condición es falsa desde el principio.
do {
    edad++; //se incrementará la edad en 1 en cada iteración del do...while, comenzando desde 15, por lo que se imprimirá la edad correspondiente en cada iteración, incluso si la condición es falsa desde el principio.
    console.log("Edad: "+edad); //se ejecutará el bloque de código dentro del do...while al menos una vez, imprimiendo la edad correspondiente en cada iteración, incluso si la condición es falsa desde el principio.
} while(edad<=20); //se ejecutará el bloque de código dentro del do...while mientras la edad sea menor a la edad mayor, lo que en este caso no se cumplirá después de la primera iteración, por lo que el ciclo se detendrá después de imprimir la edad una vez.

console.log("//////////---------------------------------///////");
console.log(edad);

//primero pregunta y si es afirmativo se ejecuta el bloque de código dentro del while, mientras que el do...while primero ejecuta el bloque de código y luego pregunta, por lo que se ejecutará al menos una vez, incluso si la condición es falsa desde el principio.
while(edad>=20){ //se ejecutará el bloque de código dentro del while mientras la edad sea menor a la edad mayor, lo que en este caso se cumplirá después de la primera iteración, por lo que el ciclo se detendrá después de imprimir la edad una vez.
    edad--; //para que entre, especifico para este ejercicio
    console.log("Edad: "+edad); //se ejecutará el bloque de código dentro del while mientras la edad sea menor a la edad mayor, lo que en este caso se cumplirá después de la primera iteración, por lo que el ciclo se detendrá después de imprimir la edad una vez.
}


/*Ejercicios de clase:
console.log("//////////-------------ejericio de clase--------------------///////");

//1. const nombres = ["ana","luis","karol"]; Mostrar en consola los nombres en mayuscula recorriendo el arreglo
const nombres = ["ana","luis","karol"];

for(let nombre of nombres){
    console.log(nombre.toUpperCase());
}

//2. Calcule la suma del 1 al 100 y muestre en consola.
let suma = 0;
for(let i = 1; i <= 100; i++){
    suma += i;
}
console.log("La suma del 1 al 100 es: " + suma);

//3.Mostrar en consola la table de multiplicar del
let numero=5;
for(let i=1; i<=12; i++){
    console.log(numero + " x " + i + " = " + (numero * i));
}


//4. Declarar una variable de compra con el valor que uds quieran 
//y si la compra es mayor a 50.000 tiene un5% y si es mayor a 100.000 tiene 10% y si no no tiene descuento

*/
/*
let compra=120000;
let descuento=0;

while(compra>50000){
    if(compra>100000){
        console.log("tiene un 10% de descuento");
        descuento=compra*0.10;
        break;
    } else{
        console.log("tiene un 5% de descuento");
        descuento=compra*0.05;
        break;
    }
}

/*5. Declare un numero del 1 al 7 y muestre a que dia de la semana corresponde Ej Valor 3 Salida Miercoles.*/
/*
let diaSemana=3;
switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Numero no valido");
}

function sumar (num1,num2){//parametros de la función, son variables que se definen dentro de los paréntesis de la función y se utilizan para recibir valores cuando se llama a la función.
    //retornamos la suma de num1 y num2, que son los parámetros de la función, y se espera que se les asignen valores cuando se llame a la función.
    return num1+num2;

}

function saludar(){ //función sin parámetros, no recibe ningún valor cuando se llama a la función.
    console.log("Hola, bienvenido a la clase de programación");

}


let suma_total = sumar(5,10); //llamamos a la función sumar y le pasamos los valores 5 y 10 como argumentos, que son los valores que se asignarán a los parámetros num1 y num2 respectivamente dentro de la función.

console.log(suma_total);

console.log(saludar());

//otra forma de hacerlo
console.log(sumar(1,1));


*/

function calculadora(num1, num2, operador) {

    if (operador === "/" && num2 === 0) {
        return "Error: No se puede dividir entre 0";
    }

    switch (operador) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        default:
            return "Operador no válido";
    }
}

// Mostrar todas las operaciones en consola
console.log("Suma:", calculadora(10, 5, "+"));
console.log("Resta:", calculadora(10, 5, "-"));
console.log("Multiplicación:", calculadora(10, 5, "*"));
console.log("División:", calculadora(10, 5, "/"));
console.log("División entre 0:", calculadora(10, 0, "/"));
console.log("hola");


 