function enviado()
{
    var instalacion=document.getElementById("Ca").checked;
    var instalacion1=document.getElementById("Es").checked;
    var habitaciones=document.getElementById("numha").value;
    var horas=document.getElementById("horas").value;
    var consumoener=document.getElementById("consumoener").value;
    var costoener=document.getElementById("costoener").value;
    var errores="";
    if(!instalacion && !instalacion1)
        {
            alert("Ingresa el tipo de instalacion");
            errores+="unerror";
        }
    if(habitaciones<1)
        {
            alert("Ingresa el numero de Habitaciones/Aulas correctas");
            errores+="unerror";
        }
    if(horas<1)
        {
            alert("Ingresa el numero de horas correctas");
            errores+="unerror";
        }
    if(consumoener<1)
        {
            alert("Ingresa el numero de consumo energetico correctas");
            errores+="unerror";
        }
    if(costoener<1)
        {
            alert("Ingresa el numero de costo energetivo correctas");
            errores+="unerror";
        }

    if(errores!=="")
        {
            return false;
        }
    else
    {
        return true;
    }
} 


document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('click', function() {
        if (this.previousState) {
            this.checked = false;
        }
        this.previousState = this.checked;
    });
});