/**
 * A continuación algunos ejemplos del uso de operadores de comparación como
 * "===","!==", "==", etc y lógicos como "||", "&&" o "!" usados en el
 * condicional "if".
 */
var texto = "0";
var número = 0;

var texto2 = "true";
var booleano = true;

// comparación de contenido
if (texto == número)// verdadero
{
	alert("el texto: " + texto + " es igual al número: " + número);
}

if (texto2 == booleano)// falso
{
	// esta parte nunca se ejecuta
}

// comparación de contenido y tipo de variable
if (texto === número)// falso
{
	// esta parte nunca se ejecuta
}

if (texto2 !== booleano)// verdadero
{
	alert("el texto: " + texto2 + " difiere del booleano: " + booleano
			+ " en contenido o/y tipo");
}

/**
 * función "confirm", "else", "else if" y "parseInt"
 */

if (confirm("¿Desea ejecutar el código javascript de esta página?")) {
	alert('El código se ha ejecutado bien');
} else {
	alert('El código no se ha ejecutado');
}

// parseInt

var piso = parseInt(prompt("Escriba el piso, donde el ascensor debería parar (-2 a 30): "));
if (piso == 0) {
	alert("Usted ya está en la planta baja.");
} else if (-2 <= piso && piso <= 30) {
	alert("Dirección a la planta n° " + piso + '!');
} else {
	alert("El piso especificado no existe.");
}

// switch, si se desea evaluar un string en lugar de un number, no se usa
// "parseInt" y se debe cambiar el case a "1", "2", "3", etcétera.

var cajón = parseInt(prompt("Elegir el cajón abierto (1-4):"));
switch (cajón) {
case 1:
	alert("Contiene varias herramientas de dibujo: papel, lápices, etc.");
	break;
case 2:
	alert("Contenido hardware: cables, componentes, etc.");
	break;
case 3:
	alert("El cajón está cerrado");
	break;
case 4:
	alert("Contiene ropa: camisas, pantalones, etc.")
	break;
default:
	alert("La noticia del día: el gabinete contiene sólo cuatro cajones y, hasta que se demuestre lo contrario, los cajones negativos no existen");
}

// condición ternaria similar a "if-else"

var mensageInicio = "Tu categoría:", mensageFin;
adulto = confirm("¿Eres mayor de edad?");
mensageFin = adulto ? " 18+ " : " -18";
alert(mensageInicio + mensageFin);

// condición sobre variables, similar a !isEmpty() de java, funciona tanto si la
// variable es "" solo en el caso de string o es un booleano "false" como si no
// está inicializada en todos los tipos.

var condiciónTest1 = "", condiciónTest2 = "Una cadena de caracteres";
alert(condiciónTest1 || condiciónTest2);