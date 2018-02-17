function Mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    var ec = document.getElementById("estadoCivil").value;
        
    if (edad < 18 && ec != "Soltero")
        alert("Es muy pequeño para NO ser soltero");

}//FIN DE LA FUNCIÓN