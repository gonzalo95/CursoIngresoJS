function Mostrar()
{
	var contador = 0;
	var acumulador = 0;

	while (true)
	{
		var num = parseInt(prompt("Ingrese un numero o cancelar para salir."));

		if (isNaN(num))
			break;

		contador ++;
		acumulador += num;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN