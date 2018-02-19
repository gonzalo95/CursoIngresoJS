function Mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño)
    {
        case "Enero":
            alert("Comienza el año");
            break;

        case "Marzo":
            alert("A clases");
            break;

        case "Julio":
            alert("Vacaciones");
            break;

        case "Diciembre":
            alert("Termina el año");
            break;
    }




}//FIN DE LA FUNCIÓN