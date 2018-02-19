function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while (respuesta == "si")
	{
		var num = parseInt(prompt("Ingrese un numero: "));
		contador ++;
		acumulador += num;
		respuesta = prompt("¿Desea ingresar otro numero?");
	}


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN