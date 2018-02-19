//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes = prompt("Ingrese el mes: ");

	switch (mes)
	{
		case "Enero":
			alert("Verano");
			break;

		case "Febrero":
			alert("Verano");
			break;

		default:
			alert("No es febrero ni enero");
	}
	
}

