function Mostrar()
{
    var importeParcial = parseInt(prompt("Ingrese el importe parcial: "));
    document.getElementById("importeFinal").value = (importeParcial * 1.21);
  
}
