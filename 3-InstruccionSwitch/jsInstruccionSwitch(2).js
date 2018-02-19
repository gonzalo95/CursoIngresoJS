function Mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño)
    {
        case "Julio":
        case "Agosto":
            alert("Invierno");
            break;

        case "Enero":
        case "febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno");
            break;
            
        default:
            alert("Ya paso el invierno");
            
    }



}//FIN DE LA FUNCIÓN