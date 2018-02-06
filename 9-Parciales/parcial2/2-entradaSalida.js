//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeParcial = prompt("Ingrese el importe parcial.");
	document.getElementById("importe").value = (importeParcial * 1.21);
	
}

