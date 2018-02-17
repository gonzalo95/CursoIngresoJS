/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = parseInt((Math.random() * 100) + 1);
		//alert(numeroSecreto );
  contadorIntentos = 0;
	

}

function verificar()
{
  document.getElementById("intentos").value = contadorIntentos;
  contadorIntentos ++;
	var num = document.getElementById("numero").value;

  if (num < numeroSecreto)
    alert("Te falta");

  else if (num > numeroSecreto)
    alert("Te pasaste");

  else
    alert("Bingo, lo adivinaste tras " + contadorIntentos + " intentos");
	
}