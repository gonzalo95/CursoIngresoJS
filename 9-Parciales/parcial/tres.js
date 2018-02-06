function Mostrar()
{
    var ancho = parseInt(document.getElementById("ancho").value);
    var largo = parseInt(document.getElementById("alrgo").value);

    var metrosAlambre = (((largo * 2)+(ancho * 2))*3);

    alert("La cantidad de metros necesaria es: " + metrosAlambre);

}
