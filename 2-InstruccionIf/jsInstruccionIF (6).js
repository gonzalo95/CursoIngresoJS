function Mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);

    if (edad < 13) 
        alert("Menor");

    else if(edad >= 18) 
        alert("Mayor");
        
    else 
        alert("Adolecente");
    


}//FIN DE LA FUNCIÓN