function calculo() {
    // alert("hellow");

    if (document.getElementById("personas").value <= 0 || document.getElementById("total").value < 0) {
        alert('Introduce datos coherentes');
    } else {
        let totalCuenta = document.getElementById("total").value;
        let servicio = document.getElementById("servicio").value;
        let personas = document.getElementById("personas").value;
        let resultado = totalCuenta * servicio / personas;
        console.log(resultado);
        document.getElementById("res").innerHTML = "<p>total a pagar</p><h3>" + resultado + " por persona</h3>";
    }

    //console.log('Total: ' + totalCuenta + ', servicio: ' + servicio + 'personas: ' + personas);

    /*
        let servicio = document.getElementsByName('servicio')[0].value;
        let personas = document.getElementsByClassName('personas')[0].value;
*/
}

function limpiar() {
    document.getElementById("total").value = null;
    document.getElementById("personas").value = null;
    document.getElementById("res").innerHTML = "";
}