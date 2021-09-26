/**
 * este script es invocado en archivos html
 */

// esta función muestra un mensaje de alerta:

alert('este es un mensaje tipo "alert"');

/**
 * A continuación ejemplos de manejo de variables, en los que se usam tanto las
 * comillas " como la apostrofe ', pero se sugiere el uso de comillas. 
 */

//ejemplo de escape para caracter especial, en este caso apostrofe,

var text = 'Esto \' es algo ';


// obteniendo el tipo de variable:
var numero = 2;
alert(typeof numero); // Muestra: « number »
var text = "mitexto";
alert(typeof text); // Muestra: « string »
var aBoolean = false;
alert(typeof aBoolean) // Muestra: « boolean »
var sinValor;
alert(typeof sinValor); // Muestra: « undefined »
alert(typeof nada); // Muestra: « undefined »

// operaciones aritméticas

var notaciónCientífica = 8e66;
var hexadecimal = 0x9A8;
var resultado = 3 + 2;
alert(resultado); // Muestra « 5 »

// se sobreescribe la variable "resultado"

var número1 = 3, número2 = 2, resultado;
resultado = número1 * número2;
alert(resultado); // Muestra: « 6 »
var prioridad = 5*4*6/8+2 // Muestra: « 17 »;
alert(prioridad);

var divisor = 3, resultado1, resultado2, resultado3;
resultado1 = (16 + 8) / 2 - 2; // 10
resultado2 = resultado1 / divisor;
resultado3 = resultado1 % divisor;
alert (resultado2) // Resultado de la división: 3.3333333333333335
alert (resultado3) // Resto de la división: 1

//se puede usar cualquiera de los siguientes operadores: + = - = = / = % =

var numero = 3;
numero += 5;
alert (numero) // Muestra: « 8 »

//concatenando textos

var hola= 'Hola', nombre = ' Carlos', resultado;
resultado = hola + nombre;
alert (resultado) // muestra: « Hola Carlos »

var texto = "Hola ";
texto += 'tu';
alert (texto) // Muestra « Hola tu ».

// concatenar texto y número

var texto= 'Un nombre : ', numero= 42, resultado;
resultado= texto + numero;
alert(resultado); // Muestra: « Un nombre : 42 »

/*
 * interacción con el usuario
 */

var NombreUsuario = prompt("Introduce nombre:");
alert(NombreUsuario); // Muestra el nombre introducido

var inicio = "Hola ", nombre, final = "!", resultado;
nombre= prompt ("¿Cuál es tu nombre? ");
resultado = inicio + nombre + final
alert (resultado);
