function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = parseInt((Math.random() * 10) + 1); //TREMENDO CODIGO * 2
	
	if (nota >= 9)
		alert("Excelente");

	else if (nota >= 7)
		alert("Muy bien");

	else if (nota >= 4)
		alert("Bien");

	else if (nota >= 2)
		alert("Mal");

	else
		alert("Pesimo");

}//FIN DE LA FUNCIÓN