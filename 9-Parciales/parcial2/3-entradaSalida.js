//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho = parseInt(document.getElementById("ancho").value);
	var largo = parseInt(document.getElementById("largo").value);

	var metrosAlambre = (((largo * 2) + (ancho * 2))*6);
	
	alert("La cantidad de metros necesaria es: " + metrosAlambre);
}

