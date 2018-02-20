function Mostrar()
{
	var contador = 0;
	var acumulador = 0;

	while (contador < 5)
	{
		var num = parseInt(prompt("Ingrese un numero"));
		acumulador += num;
		contador ++;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN