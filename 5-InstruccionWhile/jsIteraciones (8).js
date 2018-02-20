function Mostrar()
{
	var positivo = 0;
	var negativo = 1;
	
	var respuesta = 'si';

	while(respuesta == "si")
	{
		num = parseInt(prompt("Ingrese un numero: "));

		if (isNaN(num))
			break;

		if (num >= 0)
			positivo += num;

		else
			negativo *= num;

		respuesta = prompt("¿Desea ingresar otro numero?");
	}


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN