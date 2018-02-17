function Mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    var ec = document.getElementById("estadoCivil").value;
	
    if (edad >= 18 && ec == "Soltero")
        alert("Es soltero y no es menor");

}//FIN DE LA FUNCIÓN