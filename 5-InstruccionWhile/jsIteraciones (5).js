function Mostrar()
{
    var sexo = "t";
    
    while(sexo != "f" && sexo != "m")
    {
        sexo = prompt("ingrese f ó m .");
    }

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN