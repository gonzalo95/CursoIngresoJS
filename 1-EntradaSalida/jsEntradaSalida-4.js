/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato = prompt("Ingrese el dato: ");
	document.getElementById("dato").value = dato;
}

