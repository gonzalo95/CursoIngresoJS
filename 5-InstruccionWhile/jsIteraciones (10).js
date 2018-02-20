function Mostrar()
{
 
	var contPos = 0;
	var contNeg = 0;
	var contCeros = 0;
	var sumaNeg = 0;
	var sumaPos = 0;
	var contPares = 0;
	var respuesta = "si";

	while(respuesta != "no")
	{
		var num = parseInt(prompt("Ingrese un numero: "));
		
		if (num > 0)
		{
			contPos ++;
			sumaPos += num;
		}

		else if (num < 0)
		{
			contNeg ++;
			sumaNeg -= num;
		}

		else
			contCeros ++;

		if (num % 2 == 0 && num != 0)
			contPares ++;

		respuesta = prompt("¿Desea continuar?");
	}

	document.write("Cantidad de ceros: ", contCeros, "<br>Cantidad de pares: ", contPares, "<br>Cantidad de positivos: ", contPos, "<br>Cantidad de negativos: ", contNeg, "<br>Suma positivos: ", sumaPos, "<br>Suma negativos: ", sumaNeg, "<br>Promedio positivos: ", sumaPos / contPos, "<br>Promedio negativos: ", sumaNeg / contNeg, "<br>Diferencia: ", sumaPos - sumaNeg);

}//FIN DE LA FUNCIÓN