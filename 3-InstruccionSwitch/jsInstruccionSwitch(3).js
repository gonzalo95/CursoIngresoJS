function Mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Febrero":
            alert("Este mes tiene 29 dias o menos");
            break;

        default:
            alert("Este me tiene 30 dias o mas");
    }
	
	


}//FIN DE LA FUNCIÓN