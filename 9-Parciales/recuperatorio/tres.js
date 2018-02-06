function Mostrar()
{
    var precio1 = parseInt(document.getElementById("precioUno").value);
    var precio2 = parseInt(document.getElementById("precioDos").value);
    var precio3 = parseInt(document.getElementById("precioTres").value);

    alert("Total: " + (precio1 + precio2 + precio3) + " promedio: " + ((precio1 + precio2 + precio3)/3));

}
