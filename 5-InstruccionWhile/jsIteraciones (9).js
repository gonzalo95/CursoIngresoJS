function Mostrar()
{

	var contador = 0;
	var max;
	var min;
	var num;
	var respuesta = 'si';

	while(respuesta != 'no')
	{
		num = parseInt(prompt("Ingrese un numero: "));

		if (contador == 0)
		{
			max = num;
			min = num;
		}

		else if (num < min)
			min = num;

		else
			max = num;

		contador ++;
		respuesta = prompt("¿Desea continuar?");
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN