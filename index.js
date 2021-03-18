document.getElementById("formulario").addEventListener('submit', validarFormulario);
function validarFormulario(evento) {
    evento.preventDefault();
    let tarjeta = document.getElementById('tarjeta').value;
    if (tarjeta.length < 16) {
        alert('El numero de tarjeta es menor a 16, por favor ingrese un valor valido');
        return;
    }
    let cvc = document.getElementById('cvc').value;
    if (cvc.length < 3) {
        alert('El numero es menor a 3, por favor ingrese un valor valido');
        return;
    }
    let monto = document.getElementById('monto').value;
    if (monto <= 0) {
        alert('El monto es invalido, por favor ingrese un valor valido');
        return;
    }
    let nombre = document.getElementById('nombre').value;
    if (nombre <= 0) {
        alert('El nombre esta vacio, por favor ingrese un valor valido');
        return;
    }
    let apellido = document.getElementById('apellido').value;
    if (apellido <= 0) {
        alert('El apellido esta vacio, por favor ingrese un valor valido');
        return;
    }
    let ciudad = document.getElementById('ciudad').value;
    if (ciudad <= 0) {
        alert('La ciudad esta vacia, por favor ingrese un valor valido');
        return;
    }
    let provincia = document.getElementById('provincia').value;
    if (provincia === 'opcion') {
        alert('Por favor, eliga una provincia');
        return;
    }
    let codigoPostal = document.getElementById('codigoPostal').value;
    if (codigoPostal < 5) {
        alert('El codigo postal tiene menos de 5 digitos, por favor ingrese un valor valido');
        return;
    }
    let metodoPago = document.getElementsByName('tarjeta');
    if (metodoPago[0].checked == false && metodoPago[1].checked == false && metodoPago[2].checked == false && metodoPago[3].checked == false){
        alert('Por favor, escoja un metodo de pago');
        return;
    }
}